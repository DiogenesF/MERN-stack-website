const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = {
  auth: (req, res, next) => {
    const token = req.header("x-access-token");

    if (!token) {
      return res.status(401).json({ msg: "No token, authorization denied" });
    }

    try {
      jwt.verify(token, config.get("jwtSecret"), (error, decoded) => {
        if (error) {
          return res.status(401).json({ msg: "Token is not valid" });
        } else {
          req.user = decoded.user;
          next();
        }
      });
    } catch (err) {
      console.error("something wrong with auth middleware");
      res.status(500).json({ msg: "Server Error" });
    }
  },
  admin: (req, res, next) => {
    try {
      if (!req.user.isAdmin) {
        return res
          .status(403)
          .json({ errors: [{ msg: "Voce nao tem permissao!" }] });
      }
      next();
    } catch (err) {
      console.log(err.message);
    }
  },
};
