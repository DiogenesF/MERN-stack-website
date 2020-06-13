const express = require("express");
const router = express.Router();

const nodemailer = require("nodemailer");

router.post(
  "/",

  async (req, res) => {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "", //user email
          pass: "", //user password
        },
      });

      var mailOptions = {
        from: "",
        to: "",
        subject: req.body.subject,
        text:
          "Mensagem: " +
          req.body.message +
          "\nNome: " +
          req.body.name +
          "\nEmail: " +
          req.body.email,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          res.status(400).json(error);
        } else {
          res.json("Email enviado com sucesso");
        }
      });
    } catch (err) {
      console.log(err);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
