exports.middlewareGlobal = (req, res, next) => {
  //com o middleware global conseguimos deixar disponivel para todas as views
  //flash para capturar as mensagens de erros
  res.locals.errors = req.flash("errors");
  res.locals.success = req.flash("success");
  res.locals.user = req.session.user;
  next();
};

exports.loginRequired = (req, res, next) => {
  if (!req.session.user) {
    req.flash("errors", "Você precisa fazer login");
    //sempre que formos redirecionar a pagina é importante salvar a sessao antes
    req.session.save(() => res.redirect("/"));
    return;
  }
  next();
};

exports.checkCsrfError = (err, req, res, next) => {
  if (err) {
    return res.render("404");
  }
  next();
};

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
};
