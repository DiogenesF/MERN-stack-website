const express = require("express");
const router = express.Router();
multer = require("multer");
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const fs = require("fs");

const Servico = require("../../models/Servico");

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images/servicos");
  },
  filename: function (req, file, cb) {
    let extension = file.originalname.split(".").slice(-1)[0];
    cb(null, "servicos-" + Date.now() + "." + extension);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

var upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

//Route: /admin/servicos/
//Get all the servicos
router.get("/", [auth], async (req, res) => {
  try {
    const servicos = await Servico.find();

    res.json(servicos);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//Route: /admin/servicos/servicosId
//Get one servico
router.get("/:servicoId", [auth], async (req, res) => {
  try {
    const servico = await Servico.findById(req.params.servicoId);
    if (!servico) {
      return res.status(400).send("Servico not found");
    }

    res.json(servico);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Servico not found" });
    }
    res.status(500).send("Server Error");
  }
});

//Route: /admin/servicos/upload
//Create a new servico
router.post(
  "/upload",
  [
    auth,
    [
      check("titulo", "Voce deve escrever um titulo"),
      check("descricao", "Voce deve escrever uma descricao"),
    ],
  ],
  upload.single("img"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const newServico = {
        titulo: req.body.titulo,
        descricao: req.body.descricao,
      };
      if (req.file) {
        newServico.img = "/images/servicos/" + req.file.filename;
      }

      const servico = new Servico(newServico);
      await servico.save();
      res.json(servico);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

//Route: /admin/servicos/upload/servicoId
//Edit a servico
router.put(
  "/upload/:servicoId",
  [
    auth,
    [
      check("titulo", "Voce deve escrever um titulo"),
      check("descricao", "Voce deve escrever uma descricao"),
    ],
  ],
  upload.single("img"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const editServico = {
        titulo: req.body.titulo,
        descricao: req.body.descricao,
      };

      const servicoImg = await Servico.findOne({ _id: req.params.servicoId });

      if (req.file) {
        editServico.img = "images/servicos/" + req.file.filename;
        if (servicoImg.img) {
          fs.unlink(servicoImg.img, (err) => {
            if (err) console.log(err.message);
          });
        }
      }

      const servico = await Servico.findByIdAndUpdate(
        req.params.servicoId,
        { $set: editServico },
        { new: true }
      );

      res.json(servico);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

//Route: /admin/servicos/servicoId
//Delete a servico
router.delete("/:servicoId", [auth], async (req, res) => {
  try {
    const servico = await Servico.findById(req.params.servicoId);
    if (!servico) {
      return res.status(400).send("Servico not found");
    }

    if (servico.img) {
      fs.unlink(servico.img, (err) => {
        if (err) console.log(err.message);
      });
    }

    await servico.remove();

    res.json("Servico removed successfully");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
