const path = require("path");
const crypto = require("crypto");
const express = require("express");
const router = express.Router();
multer = require("multer");
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const fs = require("fs");

const Portifolio = require("../../models/Portifolio");

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "..", "..", "images/portifolios"));
  },
  filename: function (req, file, cb) {
    let extension = file.originalname.split(".").slice(-1)[0];
    cb(
      null,
      "portifolios-" +
        crypto.randomBytes(4).toString("hex") +
        Date.now() +
        "." +
        extension
    );
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

//Route: /admin/portifolios/
//Get all the portifolios
router.get("/", async (req, res) => {
  try {
    const portifolios = await Portifolio.find();

    res.json(portifolios);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//Route: /admin/portifolios/portifoliosId
//Get one portifolio
router.get("/:portifolioId", [auth], async (req, res) => {
  try {
    const portifolio = await Portifolio.findById(req.params.portifolioId);

    if (!portifolio) {
      return res.status(400).send("Portifolio nao encontrado");
    }

    res.json(portifolio);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Portifolio nao encontrado" });
    }
    res.status(500).send("Server Error");
  }
});

//Route: /admin/portifolios/upload
//Create a new portifolio
router.post(
  "/upload",
  upload.single("img"),
  [
    auth,
    [
      check("titulo", "Voce deve escrever um titulo").not().isEmpty(),
      check("descricao", "Voce deve escrever uma descricao").not().isEmpty(),
      check("categoria", "Voce deve escolher uma categoria")
        .not()
        .isEmpty()
        .isLength({ min: 2 }),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const newPortifolio = {
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        categoria: req.body.categoria,
      };

      if (req.file) {
        newPortifolio.img = "/images/portifolios/" + req.file.filename;
      }

      const portifolio = new Portifolio(newPortifolio);
      await portifolio.save();
      res.json(portifolio);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

//Route: /admin/portifolios/upload/portifolioId
//Edit a portifolio
router.put(
  "/upload/:portifolioId",
  upload.single("img"),
  [
    auth,
    [
      check("titulo", "Voce deve escrever um titulo").not().isEmpty(),
      check("descricao", "Voce deve escrever uma descricao").not().isEmpty(),
      check("categoria", "Voce deve escolher uma categoria")
        .not()
        .isEmpty()
        .isLength({ min: 2 }),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const editPortifolio = {
        titulo: req.body.titulo,
        descricao: req.body.descricao,
      };

      const portifolioImg = await Portifolio.findOne({
        _id: req.params.portifolioId,
      });

      if (req.file) {
        const reqPathEdit = path.join(__dirname, "../../");
        const pathDeleteEdit = path.resolve(reqPathEdit + portifolioImg.img);

        editPortifolio.img = "/images/portifolios/" + req.file.filename;

        if (portifolioImg.img) {
          fs.unlink(pathDeleteEdit, (err) => {
            if (err) console.log(err.message);
          });
        }
      }

      const portifolio = await Portifolio.findByIdAndUpdate(
        req.params.portifolioId,
        { $set: editPortifolio },
        { new: true }
      );

      res.json(portifolio);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

//Route: /admin/portifolios/portifolioId
//Delete a portifolio
router.delete("/:portifolioId", [auth], async (req, res) => {
  try {
    const portifolio = await Portifolio.findById(req.params.portifolioId);
    if (!portifolio) {
      return res.status(400).send("Portifolio nao encontrado");
    }

    if (portifolio.img) {
      const reqPath = path.join(__dirname, "../../");
      const pathDelete = path.resolve(reqPath + portifolio.img);
      fs.unlink(pathDelete, (err) => {
        if (err) console.log(err.message);
      });
    }

    await portifolio.remove();

    res.json("Portifolio removed successfully");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
