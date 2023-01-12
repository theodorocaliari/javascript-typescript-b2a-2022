const express = require("express");
const route = express.Router();

const homeController = require("./src/controllers/homeController");
const loginController = require("./src/controllers/loginController");
const contatoController = require("./src/controllers/contatoController");

//middleware
const { loginRequired } = require("./src/middlewares/middleware");

//rotas home
route.get("/", homeController.index);

//rotas login
route.get("/login", loginController.index);
route.post("/login/register", loginController.register);
route.post("/login/login", loginController.login);
route.get("/login/logout", loginController.logout);

//rota de contato
route.get("/contato/index", loginRequired, contatoController.index);
route.post("/contato/register", loginRequired, contatoController.register);
route.get("/contato/index/:id", loginRequired, contatoController.edit);
route.post("/contato/index/:id", loginRequired, contatoController.editContato);

module.exports = route;
