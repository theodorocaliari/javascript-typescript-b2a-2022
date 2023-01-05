const { response } = require("express");
const express = require("express");
const app = express();
const path = require("path");
const routes = require("./routes");
const middlewareGlobal = require("./middlewares/middleware");
const { outroMiddleware } = require("./middlewares/middleware");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "public"))); //caminho absoluto para o diretorio public
//caminho absoluto para views
app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs"); //possibilita o uso de loops e recursos dinamicos no html
app.use(middlewareGlobal);
app.use(routes);

app.listen(3000, () => {
  console.log("Servidor executando na porta 3000");
  console.log("http://localhost:3000");
});
