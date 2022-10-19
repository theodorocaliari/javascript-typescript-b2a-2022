function Calculadora() {
  this.display = document.querySelector(".display");
  this.btnClear = document.querySelector(".btn-clear");

  this.inicia = () => {
    this.detectaCliqueBotoes();
    this.keyEnter();
  };

  this.clearDisplay = () => {
    this.display.value = "";
  };

  this.clearLastNumber = () => {
    this.display.value = this.display.value.slice(0, -1);
  };

  this.keyEnter = () => {
    this.display.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        this.realizaConta();
      }
    });
  };

  this.realizaConta = () => {
    let conta = this.display.value;

    try {
      conta = eval(conta);

      if (!conta) {
        alert("Conta invalida");
        return;
      }
      this.display.value = conta;
    } catch (e) {
      alert("Conta invalida");
      return;
    }
  };

  this.detectaCliqueBotoes = () => {
    document.addEventListener("click", (e) => {
      const el = e.target;
      if (el.classList.contains("btn-num")) {
        this.addNumDisplay(el.innerText);
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
  };
  this.addNumDisplay = (valor) => {
    this.display.value += valor;
    this.display.focus(); //mantem o foco no display e não no ultimo botão clicado
  };
}

const calculadora = new Calculadora();
calculadora.inicia();
