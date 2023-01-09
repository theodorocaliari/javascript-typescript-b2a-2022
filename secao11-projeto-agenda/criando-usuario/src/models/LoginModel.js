//fica responsavel por dados e comunicacao com a base de dados
const mongoose = require("mongoose");
const validator = require("validator");
const bcryptjs = require("bcryptjs");

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const LoginModel = mongoose.model("Login", LoginSchema);

class Login {
  constructor(body) {
    this.body = body;
    this.errors = []; //se tiver erro não pode cadastrar na base
    this.user = null; //
  }

  //operacao para base de dados são promisses
  async register() {
    this.valida();
    if (this.errors.length > 0) return; //se passar dos erros precisamos registrar o usuario na base

    await this.userExists();

    if (this.errors.length > 0) return; //user exists vai adicionar item no array caso o erro ja existe na base

    const salt = bcryptjs.genSaltSync();
    this.body.password = bcryptjs.hashSync(this.body.password, salt);

    this.user = await LoginModel.create(this.body); //se for criado é atribuido para variavel user
  }

  async userExists() {
    const user = await LoginModel.findOne({ email: this.body.email });
    if (user) {
      this.errors.push("Usuario já existe");
    }
  }

  valida() {
    this.cleanUp();

    //validacao
    //o email precisa ser valido
    if (!validator.isEmail(this.body.email)) {
      this.errors.push("E-mail inválido");
    }
    //a senha precisa ter enter 3 e 50 chars
    if (this.body.password.length < 3 || this.body.password.length > 50) {
      this.errors.push("A senha precisa ter entre 3 e 50 caracteres");
    }
  }

  cleanUp() {
    //body são os campos do formulario
    //limpando o objeto recebido no envio
    for (const key in this.body) {
      if (typeof this.body[key] !== "string") {
        this.body[key] = "";
      }
    }

    //criando um novo objeto, excluindo o csrfToken
    this.body = {
      email: this.body.email,
      password: this.body.password,
    };
  }
}

module.exports = Login;
