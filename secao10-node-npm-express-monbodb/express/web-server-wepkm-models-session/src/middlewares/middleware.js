exports.middlewareGlobal = (req, res, next) => {
  //middleware é um recurso que possibilita um controle de informações intermediarias entre a requisição e a resposta em um sistema
  console.log("passei no middleware global");
  next();
};

exports.outroMiddleware = (req, res, next) => {
  console.log(req.session);
  //console.log(req.flash("success"), req.flash("error"), req.flash("info"));
  next();
};
