const express = require("express");
const connectDB = require("./config/db");
const postRouter = require("./routes/admin/posts");
const bannerRouter = require("./routes/admin/banners");
const portifolioRouter = require("./routes/admin/portifolios");
const contatoRouter = require("./routes/admin/contato");
const loginRouter = require("./routes/admin/login");
const categoriaRouter = require("./routes/admin/categoria");

const app = express();

connectDB();

app.use("/images", express.static("images"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/admin/posts", postRouter);
app.use("/admin/banners", bannerRouter);
app.use("/admin/portifolios", portifolioRouter);
app.use("/admin/contato", contatoRouter);
app.use("/admin/login", loginRouter);
app.use("/admin/categoria", categoriaRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
