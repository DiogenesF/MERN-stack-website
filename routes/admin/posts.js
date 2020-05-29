const express = require("express");
const router = express.Router();
multer = require("multer");
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const fs = require("fs");

const Post = require("../../models/Post");

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images/posts");
  },
  filename: function (req, file, cb) {
    let extension = file.originalname.split(".").slice(-1)[0];
    cb(null, "posts-" + Date.now() + "." + extension);
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
});

//Route: /admin/posts/postId
//Get one post
router.get("/:postId", [auth], async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) {
      return res.status(400).send("Post not found");
    }

    res.json(post);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Post not found" });
    }
    res.status(500).send("Server Error");
  }
});

//Route: /admin/posts/upload
//Create a new post
router.post(
  "/upload",
  [
    auth,
    [
      check("titulo", "Voce deve escrever um titulo"),
      check("descricao", "Voce deve escrever uma descricao"),
      check("categoria", "Voce deve escolher uma categoria"),
    ],
  ],
  upload.single("img"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const newPost = {
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        categoria: req.body.categoria,
      };
      if (req.file) {
        newPost.img = "images/posts/" + req.file.filename;
      }

      const post = new Post(newPost);
      await post.save();
      res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

//Route: /admin/posts/upload/postId
//Edit a post
router.put(
  "/upload/:postId",
  [
    auth,
    [
      check("titulo", "Voce deve escrever um titulo"),
      check("descricao", "Voce deve escrever uma descricao"),
      check("categoria", "Voce deve escolher uma categoria"),
    ],
  ],
  upload.single("img"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const editPost = {
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        categoria: req.body.categoria,
      };

      const postImg = await Post.findOne({ _id: req.params.postId });

      if (req.file) {
        editPost.img = "images/posts/" + req.file.filename;
        if (postImg.img) {
          fs.unlink(postImg.img, (err) => {
            if (err) console.log(err.message);
          });
        }
      }

      const post = await Post.findByIdAndUpdate(
        req.params.postId,
        { $set: editPost },
        { new: true }
      );

      res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

//Route: /admin/posts/postId
//Delete a post
router.delete("/:postId", [auth], async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) {
      return res.status(400).send("Post not found");
    }

    if (post.img) {
      fs.unlink(post.img, (err) => {
        if (err) console.log(err.message);
      });
    }

    await post.remove();

    res.json("Post removed successfully");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
