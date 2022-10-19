function app() {
  class ValidaForm {
    constructor() {
      this.formulario = document.querySelector(".formulario");
      this.eventos();
    }
    eventos() {
      this.formulario.addEventListener("submit", (e) => {
        this.handleSubmit(e);
      });
    }

    handleSubmit(e) {
      e.preventDefault();
      const camposValidos = this.verifyFields();
      const senhasValidas = this.verifyPasswords();

      if (camposValidos && senhasValidas) {
        alert("formulario enviado");
        this.formulario.submit();
      }
    }

    verifyPasswords() {
      let valid = true;

      const password = this.formulario.querySelector("#password");
      const confirmPassword = this.formulario.querySelector("#confirmPassword");

      if (password.value !== confirmPassword.value) {
        valid = false;
        this.feedback(password, "error", `As senhas não coincidem.`);
        this.feedback(confirmPassword, "error", `As senhas não coincidem.`);
      } else {
        this.feedback(password, "correct", "");
      }

      const passwordLength = password.value.length;
      if (!password || passwordLength < 6 || passwordLength > 12) {
        valid = false;
        this.feedback(
          password,
          "error",
          `O campo "Senha" deve ter entre 6 e 12 caracteres.`
        );
      } else {
        this.feedback(password, "correct", "");
      }

      const confirmPasswordLength = confirmPassword.value.length;
      if (
        !confirmPassword ||
        confirmPasswordLength < 6 ||
        confirmPasswordLength > 12
      ) {
        valid = false;
        this.feedback(
          confirmPassword,
          "error",
          `O campo "Repetir senha" deve ter entre 6 e 12 caracteres.`
        );
      } else {
        this.feedback(confirmPassword, "correct", "");
      }

      return valid;
    }

    verifyFields() {
      let valid = true;

      for (let feedback of this.formulario.querySelectorAll(".feedback")) {
        feedback.remove();
      }

      for (let field of this.formulario.querySelectorAll(
        ".form-grid__item input"
      )) {
        if (field.type !== "submit") {
          const label = field.previousElementSibling.innerText;
          if (!field.value) {
            this.feedback(
              field,
              "error",
              `O campo "${label}" não pode estar em branco`
            );
            valid = false;
          }

          if (field.name === "nome" && field.value) {
            this.feedback(field, "correct", "");
          }
          if (field.name === "sobrenome" && field.value) {
            this.feedback(field, "correct", "");
          }

          if (field.name === "cpf") {
            if (!this.validaCPF(field)) {
              valid = false;
            } else {
              this.feedback(field, "correct", "");
            }
          }

          if (field.name === "username") {
            if (!this.validaUsername(field)) {
              valid = false;
            } else {
              this.feedback(field, "correct", "");
            }
          }
        }
      }
      return valid;
    }

    validaCPF(field) {
      const cpf = new ValidaCPF(field.value);
      if (!cpf.valida()) {
        this.feedback(field, "error", "CPF inválido.");
        return false;
      }
      return true;
    }

    validaUsername(field) {
      const fieldValueLength = field.value.length;
      let valid = true;
      if (!fieldValueLength || fieldValueLength <= 3 || fieldValueLength > 20) {
        this.feedback(
          field,
          "error",
          `O campo "Nome de Usuário" deve ter entre 3 e 20 caracteres.`
        );
        valid = false;
      }

      //expressao regular
      if (!field.value.match(/^[a-zA-Z0-9]+$/g)) {
        this.feedback(
          field,
          "error",
          `O campo "Nome de Usuário" deve conter letras e/ou números.`
        );
        valid = false;
      }

      return valid;
    }

    feedback(field, type, msg) {
      const div = document.createElement("div");
      const parentDiv = field.parentElement;

      if (type === "error") {
        if (parentDiv.classList.contains("correct")) {
          parentDiv.classList.remove("correct");
        }
        parentDiv.classList.add("error");
        div.classList.add("feedback");
        div.innerHTML = msg;
      }

      if (type === "correct") {
        if (parentDiv.classList.contains("error")) {
          parentDiv.classList.remove("error");
        }
        parentDiv.classList.add("correct");
      }

      parentDiv.append(div);
    }
  }
  const valida = new ValidaForm();
}

app();
