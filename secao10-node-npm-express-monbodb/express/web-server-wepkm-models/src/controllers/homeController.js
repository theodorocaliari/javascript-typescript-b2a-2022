const HomeModel = require("../models/HomeModel");

HomeModel.create({
  titulo: "Titulo exemplo",
  descricao: "Descricao exemplo",
})
  .then((dados) => console.log(dados))
  .catch((err) => console.log(err));

exports.paginaInicial = (req, res) => {
  res.render("index");
  console.log(`req.session.nome: ${req.session.nome}`);
};

exports.trataPost = (req, res) => {
  res.send("Mensagem de feedback post");
};
