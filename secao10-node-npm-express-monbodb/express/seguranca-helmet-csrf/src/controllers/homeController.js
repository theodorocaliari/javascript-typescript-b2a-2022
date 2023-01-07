//controller fica resposavel pelo model e pela view da rota
exports.paginaInicial = (req, res) => {
  //sessao
  //req.session.usuario = { nome: "luiz", logado: true };

  //flash assim q a informação é recuperada ela deixa de existir
  // req.flash("info", "information");
  // req.flash("error", "erro");
  // req.flash("success", "sucesso");
  res.render("index");
  return;
};

exports.trataPost = (req, res) => {
  res.send("Mensagem de feedback post");
};
