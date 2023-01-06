exports.paginaInicial = (req, res) => {
  //sessao
  //req.session.usuario = { nome: "luiz", logado: true };

  //flash assim q a informação é recuperada ela deixa de existir
  // req.flash("info", "information");
  // req.flash("error", "erro");
  // req.flash("success", "sucesso");

  res.render("index", {
    titulo: "Titulo da Pagina",
    numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  });
  return;
};

exports.trataPost = (req, res) => {
  res.send("Mensagem de feedback post");
};
