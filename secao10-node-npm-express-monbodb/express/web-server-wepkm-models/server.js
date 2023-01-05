const path = require("path");
const routes = require("./routes");

require("dotenv").config({
  path: path.resolve(__dirname, "./.env"),
});

const { response } = require("express");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.cmuasxv.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    { dbName: `${process.env.DB_NAME}`, useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Base de dados conectada.");
    app.emit("pronto");
  })
  .catch((err) => {
    console.log(err);
  });

const middlewareGlobal = require("./src/middlewares/middleware");
const { outroMiddleware } = require("./src/middlewares/middleware");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "public"))); //caminho absoluto para o diretorio public
//caminho absoluto para views
app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs"); //possibilita o uso de loops e recursos dinamicos no html
app.use(middlewareGlobal);
app.use(routes);

//quando emitir o sinal de "pronto" sera executada o listen
app.on("pronto", () => {
  app.listen(process.env.NODE_PORT, () => {
    console.log(`Servidor executando na porta ${process.env.NODE_PORT}`);
    console.log(`http://${process.env.NODE_HOST}:${process.env.NODE_PORT}`);
  });
});
