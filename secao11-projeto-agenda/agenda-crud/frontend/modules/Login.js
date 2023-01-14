import validator from "validator";

export default class Login {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();
  }

  events() {
    //verifica se form existe
    if (!this.form) return;
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      //alert("form não enviado");
      this.validate(e);
    });
  }

  validate(e) {
    const el = e.target;
    const emailInput = el.querySelector("input[name='email']");
    const passwordInput = el.querySelector("input[name='password']");

    let error = false;

    if (!validator.isEmail(emailInput.value)) {
      alert("email invalido");
      error = true;
    }

    if (passwordInput.value.length < 3 || passwordInput.value.length > 50) {
      alert("password precisa no minimo de 3 caracteres e no maximo 50 caracteres");
      error = true;
    }
    //console.log(emailInput.value, passwordInput.value);
    if (!error) el.submit();
  }
}
