const express = require("express");
const connectDB = require("./config/db");
const postRouter = require("./routes/admin/posts");
const bannerRouter = require("./routes/admin/banners");
const servicoRouter = require("./routes/admin/servicos");
const contatoRouter = require("./routes/admin/contato");
const loginRouter = require("./routes/admin/login");

const app = express();

connectDB();

app.use("/files", express.static("files"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/admin/posts", postRouter);
app.use("/admin/banners", bannerRouter);
app.use("/admin/servicos", servicoRouter);
app.use("/admin/contato", contatoRouter);
app.use("/admin/login", loginRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
