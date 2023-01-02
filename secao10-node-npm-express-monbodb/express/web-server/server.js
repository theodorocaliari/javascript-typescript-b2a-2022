//importando o express
const { response } = require("express");
const express = require("express");

//express
const app = express();

//CRUD ---->  CREATE, READ, UPDATE, DELETE
//METODOS ->  POST    GET   PUT     DELETE

//express auxilia no carregamento das rotas no navegador

//metodo get - carrega paginas no navegador

app.get("/", (require, response) => {
  //cliente faz o require e response da o retorno(resposta)
  response.send("Hello World!");
});

app.get("/contato", (req, res) => {
  res.send("Acessado a tela de contato");
});

app.listen(3000, () => {
  console.log("Servidor executando na porta 3000");
  console.log("http://localhost:3000");
});
