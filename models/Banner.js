const mongoose = require("mongoose");

const BannerSchema = new mongoose.Schema({
  titulo: {
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

module.exports = Banner = mongoose.model("banner", BannerSchema);
