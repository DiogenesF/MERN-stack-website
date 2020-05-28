const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const auth = require("../../middleware/auth");
const jwt = require("jsonwebtoken");
const config = require("config");

const { check, validationResult } = require("express-validator");

const User = require("../../models/User");

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const { password, email } = req.body;
    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash(password, salt);

    let newUser = {
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

module.exports = router;
