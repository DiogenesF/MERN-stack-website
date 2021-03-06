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
  categorias: {
    type: Array,
    required: true,
  },
  categoria_escolhida: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Post = mongoose.model("post", PostSchema);
