const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { auth, admin } = require("../../middleware/auth");
const jwt = require("jsonwebtoken");
const config = require("config");

const { check, validationResult } = require("express-validator");

const User = require("../../models/User");

//Route: /admin/login
//Get info about user that is logged in
router.get("/login", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error!");
  }
});

//Route: /admin/users
//Get all registered users
router.get("/users", auth, async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error!");
  }
});

//Route: /admin/login
//Logar o admin
router.post(
  "/login",
  [
    check("email", "Voce precisa preencher todos os campos!").not().isEmpty(),
    check("password", "Voce precisa preencher todos os campos!")
      .not()
      .isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { password, email } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid credentials" }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid credentials" }] });
      }

      const payload = {
        user: {
          id: user.id,
          isAdmin: user.isAdmin,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error!");
    }
  }
);

//Route: /admin/register
//Register new user
router.post("/register", async (req, res) => {
  try {
    const { name, password, email } = req.body;
    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash(password, salt);

    let newUser = {
      name: name,
      email: email,
      password: pass,
    };

    const user = new User(newUser);
    await user.save();

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error!");
  }
});

//Route: /admin/edit
//Edit a user
router.put("/edit/:editId", auth, admin, async (req, res) => {
  try {
    const user = await User.findById(req.params.editId);

    user.isAdmin = true;
    await user.save();

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error!");
  }
});

module.exports = router;
