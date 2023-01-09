const Login = require("../models/LoginModel");
exports.index = (req, res) => {
  res.render("login");
};

exports.register = async (req, res) => {
  //é importante envolver qualquer chamada AWAIT em um bloco TRY CATCH, para podermos identificar o erro e resolver
  try {
    const login = new Login(req.body);
    await login.register();

    //verificando erro
    if (login.errors.length > 0) {
      //exibindo mensagem de erro
      req.flash("errors", login.errors);
      //salvando a sessao para garantir o retorno para a tela de login
      req.session.save(function () {
        //back redireciona a pagina de onde o formulario veio
        return res.redirect("/login");
      });
      //esse return impede que a função continue executando
      return;
    }
    req.flash("success", "Usuario criado com sucesso");
    //salvando a sessao para garantir o retorno para a tela de login
    req.session.save(function () {
      //back redireciona a pagina de onde o formulario veio
      return res.redirect("/login");
    });
  } catch (e) {
    console.log(e);
    return res.render("404");
  }
};
