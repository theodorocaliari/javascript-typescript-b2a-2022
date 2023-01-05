exports.paginaInicial = (req, res) => {
  res.render("index");
  console.log(`req.session.nome: ${req.session.nome}`);
};

exports.trataPost = (req, res) => {
  res.send("Mensagem de feedback post");
};
