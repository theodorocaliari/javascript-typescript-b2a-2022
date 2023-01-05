const express = require("express");
const route = express.Router();

const homeController = require("./src/controllers/homeController");
const contatoController = require("./src/controllers/contatoController");

function meuMiddleware(req, res, next) {
  console.log();
  console.log("Passei no 'meuMiddleware'");
  console.log();
  next();
}

//rota da home
route.get("/", meuMiddleware, homeController.paginaInicial);
route.post("/", homeController.trataPost);

//rotas de contato
route.get("/contato", contatoController.paginaInicial);

//sobrescrevendo o moduloexports para exportar route
module.exports = route;
