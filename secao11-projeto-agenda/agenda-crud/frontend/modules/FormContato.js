export default class FormContato {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();
  }

  events() {
    if (!this.form) return;
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      //alert("aha!");
      this.valida(e);
    });
  }

  valida(e) {
    const el = e.target;
    const inputNome = el.querySelector('input[name="nome"]');
    const inputEmail = el.querySelector('input[name="email"]');
    const inputTelefone = el.querySelector('input[name="telefone"]');
    let error = false;

    if (!inputNome.value) {
      alert("Campo Nome é obrigatório");
      error = true;
    } else if (!inputEmail.value && !inputTelefone.value) {
      alert("Pelo menos um contato precisa ser enviado: email ou telefone");
      error = true;
    }

    if (!error) el.submit();
  }
}
