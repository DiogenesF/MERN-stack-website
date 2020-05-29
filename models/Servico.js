const mongoose = require("mongoose");

const ServicoSchema = new mongoose.Schema({
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
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Servico = mongoose.model("servico", ServicoSchema);
