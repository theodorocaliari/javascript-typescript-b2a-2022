exports.middlewareGlobal = (req, res, next) => {
  //middleware é um recurso que possibilita um controle de informações intermediarias entre a requisição e a resposta em um sistema
  console.log("middleware 'middlewareGlobal'");
  next();
};

exports.outroMiddleware = (req, res, next) => {
  //console.log(req.session);
  //console.log(req.flash("success"), req.flash("error"), req.flash("info"));
  console.log("middleware 'outroMiddleware'");
  next();
};

exports.checkCsrfError = (err, req, res, next) => {
  console.log("middleware 'checkCsrfError'");
  if (err && err.code === "EBADCSRFTOKEN") {
    return res.render("500");
  }
};

exports.csrfMiddleware = (req, res, next) => {
  console.log("middleware 'csrfMiddleware'");
  res.locals.csrfToken = req.csrfToken();
  next();
};
