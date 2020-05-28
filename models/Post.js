const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
});

module.exports = Post = mongoose.model("post", PostSchema);
