const mongoose = require("mongoose");

const ContatoSchema = new mongoose.Schema({
  link: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Contato = mongoose.model("contato", ContatoSchema);
