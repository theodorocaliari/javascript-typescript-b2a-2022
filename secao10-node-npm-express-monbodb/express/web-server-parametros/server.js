const { response } = require("express");
const express = require("express");
const app = express();

//trata o body do metodo post e retorna um objeto
//sem urlencoded o body de post retorna como undefined
app.use(express.urlencoded({ extended: true }));

app.get("/", (require, response) => {
  //cliente faz o require e response da o retorno(resposta)
  response.send(`
  <h1>Hello World!</h1>
    <form action="/" method="POST">
      Nome: <input type="text" name="nome">
      <button>Enviar</button>
    </form>
  `);
});

//passando parametros na rota, dois pontos e o nome do parametro
//o interrogacao no final do nome torna o parametro opcional
app.get("/testes/:idUsuarios?/:parametro?", (req, res) => {
  console.log(req.params); //captura os parametros da url
  console.log(req.query); //captura o query string da url
  res.send(req.params);
});

//post tras as informações dentro da requisicao
app.post("/", (req, res) => {
  console.log(req.body);
  res.send(`a informação enviada foi: ${req.body.nome}`);
});

app.listen(3000, () => {
  console.log("Servidor executando na porta 3000");
  console.log("http://localhost:3000");
});
