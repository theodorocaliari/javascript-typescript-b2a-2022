const Contato = require("../models/ContatoModel");

exports.index = async (req, res) => {
  const contatos = await Contato.buscaContatos();
  //passando contatos para render ter acesso as informacoes
  res.render("index", { contatos });
};
