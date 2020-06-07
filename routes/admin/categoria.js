const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const { check, validationResult } = require("express-validator");

const Categoria = require("../../models/Categoria");

//Route: /admin/categoria
//Get all the categorias
router.get("/", auth, async (req, res) => {
  try {
    const categorias = await Categoria.find();
    res.json(categorias);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error!");
  }
});

//Route: /admin/categoria/create
//Logar o admin
router.post(
  "/create",
  auth,
  [check("categoria", "Voce precisa escolher uma categoria!")],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { categoria } = req.body;

      const verifica_categoria = await Categoria.findOne({
        categoria: categoria,
      });

      if (verifica_categoria) {
        return res.json({ msg: "This one already exists!" });
      }

      const new_categoria = new Categoria({ categoria });
      await new_categoria.save();

      res.json(new_categoria);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error!");
    }
  }
);

module.exports = router;
