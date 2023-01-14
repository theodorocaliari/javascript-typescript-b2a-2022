const Contato = require("../models/ContatoModel");

exports.index = (req, res) => {
  //res.send("oie");
  //passamos um objeto vazio na chave 'contato' para corrigir o erro de not defined
  res.render("contato", {
    contato: {},
  });
};

//precisa ser async pois o metodo é async no contato model
exports.register = async (req, res) => {
  try {
    const contato = new Contato(req.body);
    await contato.register();

    if (contato.errors.length > 0) {
      req.flash("errors", contato.errors);
      req.session.save(() => res.redirect("/contato/index"));
      return;
    }

    req.flash("success", "Contato cadastrado com sucesso");
    req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));
    return;
  } catch (error) {
    console.log(error);
    return res.render("404");
  }
};

exports.edit = async function (req, res) {
  //se não foi enviado o parametro de ID é direcionado para a pagina 404
  if (!req.params.id) return res.render("404");

  const contato = await Contato.buscaPorId(req.params.id);

  if (!contato) return res.render("404");

  res.render("contato", { contato });
};

exports.editContato = async function (req, res) {
  try {
    if (!req.params.id) return res.render("404");
    const contato = new Contato(req.body);
    await contato.editContato(req.params.id);

    if (contato.errors.length > 0) {
      req.flash("errors", contato.errors);
      req.session.save(() => res.redirect("/contato/index"));
      return;
    }

    req.flash("success", "Contato atualizado com sucesso.");
    req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));
    return;
  } catch (error) {
    console.log(error);
    res.render("404");
  }
};

exports.delete = async function (req, res) {
  if (!req.params.id) return res.render("404");

  const contato = await Contato.delete(req.params.id);
  if (!contato) return res.render("404");

  req.flash("success", "Contato excluido com sucesso.");
  req.session.save(() => res.redirect(`/`));
  return;
};
