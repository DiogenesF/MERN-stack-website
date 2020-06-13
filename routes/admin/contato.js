const express = require("express");
const router = express.Router();
const { auth } = require("../../middleware/auth");

const Contato = require("../../models/Contato");

//Route: /admin/contato/
//Get the contato
router.get("/", auth, async (req, res) => {
  try {
    const contato = await Contato.find();

    res.json(contato);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//Route: /admin/contato/upload
//Create or update the contato
router.post("/upload", auth, async (req, res) => {
  try {
    let contato = await Contato.find();

    if (!contato.length > 0) {
      contato = new Contato(req.body);
      await contato.save();
      return res.json(contato);
    }

    contato[0].link = req.body.link;
    await contato[0].save();
    res.json(contato);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
