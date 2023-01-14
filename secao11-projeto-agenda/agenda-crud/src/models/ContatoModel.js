const mongoose = require("mongoose");
const validator = require("validator");

const ContatoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  sobrenome: { type: String, required: false, default: "" },
  email: { type: String, required: false, default: "" },
  telefone: { type: String, required: false, default: "" },
  criadoEm: { type: Date, default: Date.now },
});

const ContatoModel = mongoose.model("Contato", ContatoSchema);

//criando com CONSTRUCTOR function
function Contato(body) {
  this.body = body;
  this.errors = [];
  this.contato = null;
}

Contato.prototype.register = async function () {
  //funcoes assincronas retornam uma promessa para a cadeia de execucao
  this.valida();
  if (this.errors.length > 0) {
    return;
  }
  //mandando o objeto pronto para o contato body
  this.contato = await ContatoModel.create(this.body);
};

Contato.prototype.valida = function () {
  this.cleanUp();

  if (this.body.email && !validator.isEmail(this.body.email)) {
    this.errors.push("E-mail inválido");
  }
  if (!this.body.nome) {
    this.errors.push("O campo nome é obrigatorio");
  }
  if (!this.body.email && !this.body.telefone) {
    this.errors.push("Pelo menos um contato precisa ser enviado: email ou telefone");
  }
};

Contato.prototype.cleanUp = function () {
  for (const key in this.body) {
    if (typeof this.body[key] !== "string") {
      this.body[key] = "";
    }
  }
  //criando um novo objeto, excluindo o csrfToken
  this.body = {
    nome: this.body.nome,
    sobrenome: this.body.sobrenome,
    email: this.body.email,
    telefone: this.body.telefone,
  };
};

Contato.prototype.editContato = async function (id) {
  //este metodo não é estatico pois precisa acessar outros metodos da funcao construtora, por isso o uso do prototype
  if (typeof id !== "string") return;
  this.valida();
  if (this.errors.length > 0) return;

  this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, { new: true });
};

//sem prototype é equivalente a uma funcao estatica
Contato.buscaPorId = async function (id) {
  //retorna um usuario ou null
  if (typeof id !== "string") return;
  const contato = await ContatoModel.findById(id);
  return contato;
};

Contato.buscaContatos = async function () {
  //buscando contatos no banco e ordenando na ordem decrescente(-1) em 'criadoEm'
  //ordem crescente (1)
  //em find é possivel enviar um objeto para fazer um filtro
  const contatos = await ContatoModel.find().sort({ criadoEm: -1 });
  return contatos;
};

Contato.delete = async function (id) {
  if (typeof id !== "string") return;
  const contato = await ContatoModel.findOneAndDelete({ _id: id });
  return contato;
};

module.exports = Contato;
