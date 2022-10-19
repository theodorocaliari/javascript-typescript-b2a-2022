function criaCalculadora() {
  const obj = {
    display: document.querySelector(".display"),
    btnClear: document.querySelector(".btn-clear"),

    inicia() {
      //this aqui é const calculadora
      this.detectaCliqueBotoes();
      this.keyEnter();
    },

    clearDisplay() {
      this.display.value = "";
    },

    clearLastNumber() {
      this.display.value = this.display.value.slice(0, -1);
    },

    keyEnter() {
      this.display.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
          this.realizaConta();
        }
      });
    },

    realizaConta() {
      //eval é um metodo javascript que recebe os parametros e interpreta e executa como js
      //isso pode trazer problemas ou falhas de segurança, deve ser usado com cautela
      let conta = this.display.value;

      try {
        conta = eval(conta);
        if (!conta) {
          alert("conta invalida");
          return;
        }
        this.display.value = conta;
      } catch (e) {
        alert("conta invalida");
        return;
      }
    },

    detectaCliqueBotoes() {
      //this -> calculadora
      document.addEventListener("click", (e) => {
        const el = e.target;
        if (el.classList.contains("btn-num")) {
          //this aqui é necessario mudar o comportamento padrao do js
          //é necessario adicionar o metodo bind na funcao e passar o this do contexto
          //arrow funcions não necessitam do bind
          this.btnParaDisplay(el.innerText);
        }
        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (el.classList.contains("btn-del")) {
          this.clearLastNumber();
        }

        if (el.classList.contains("btn-eq")) {
          this.realizaConta();
        }
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },
  };
  return obj;
}

const calculadora = criaCalculadora();
calculadora.inicia();
