const express = require("express");
const router = express.Router();
multer = require("multer");
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

const fs = require("fs");
const Post = require("../../models/Post");

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    let extension = file.originalname.split(".").slice(-1)[0];
    cb(null, "posts" + Date.now() + "." + extension);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image.png") {
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

//Route: /admin/posts/
//Get all the posts
router.get("/", [auth], async (req, res) => {
  try {
    const posts = await Post.find();

    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }

  res.send("ok");
});

//Route: /admin/posts/upload
//Upload a new post
router.post("/upload", upload.single("img"), async (req, res) => {
  try {
    const newPost = {
      titulo: req.body.titulo,
      descricao: req.body.descricao,
      categoria: req.body.categoria,
      img: "files/" + req.file.filename,
    };

    const post = new Post(newPost);
    await post.save();
    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
