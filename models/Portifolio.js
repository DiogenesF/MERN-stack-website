const mongoose = require("mongoose");

const PortifolioSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  categoria: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Portifolio = mongoose.model("portifolio", PortifolioSchema);
