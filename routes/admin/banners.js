const express = require("express");
const router = express.Router();
multer = require("multer");
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const fs = require("fs");

const Banner = require("../../models/Banner");

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images/banners");
  },
  filename: function (req, file, cb) {
    let extension = file.originalname.split(".").slice(-1)[0];
    cb(null, "banners-" + Date.now() + "." + extension);
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

//Route: /admin/banners
//Get all the banners
router.get("/", [auth], async (req, res) => {
  try {
    const banners = await Banner.find();

    res.json(banners);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//Route: /admin/banners/bannerId
//Get one banner
router.get("/:bannerId", [auth], async (req, res) => {
  try {
    const banner = await Banner.findById(req.params.bannerId);
    if (!banner) {
      return res.status(400).send("Banner not found");
    }

    res.json(banner);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Banner not found" });
    }
    res.status(500).send("Server Error");
  }
});

//Route: /admin/banners/upload
//Create a new banner
router.post(
  "/upload",
  [auth, [check("titulo", "Voce deve escrever um titulo")]],
  upload.single("img"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const newBanner = {
        titulo: req.body.titulo,
      };
      if (req.file) {
        newBanner.img = "images/banners/" + req.file.filename;
      }

      const banner = new Banner(newBanner);
      await banner.save();
      res.json(banner);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

//Route: /admin/banners/upload/bannerId
//Edit a banner
router.put(
  "/upload/:bannerId",
  [auth, [check("titulo", "Voce deve escrever um titulo")]],
  upload.single("img"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const editBanner = {
        titulo: req.body.titulo,
      };

      const bannerImg = await Banner.findOne({ _id: req.params.bannerId });

      if (req.file) {
        editBanner.img = "images/banners/" + req.file.filename;
        if (bannerImg.img) {
          fs.unlink(bannerImg.img, (err) => {
            if (err) console.log(err.message);
          });
        }
      }

      const banner = await Banner.findByIdAndUpdate(
        req.params.bannerId,
        { $set: editBanner },
        { new: true }
      );

      res.json(banner);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

//Route: /admin/banners/bannerId
//Delete a banner
router.delete("/:bannerId", [auth], async (req, res) => {
  try {
    const banner = await Banner.findById(req.params.bannerId);
    if (!banner) {
      return res.status(400).send("Banner not found");
    }

    if (banner.img) {
      fs.unlink(banner.img, (err) => {
        if (err) console.log(err.message);
      });
    }

    await banner.remove();

    res.json("Banner removed successfully");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
