class ValidaCPF {
  constructor(cpf) {
    this.cpf = cpf;
    if (typeof cpf !== "undefined") {
      this.cpfLimpo = this.limpaCPF(cpf);
    }
  }

  get getCPF() {
    return this.cpf;
  }

  set setCPF(numeroCPF) {
    numeroCPF = this.limpaCPF(numeroCPF);

    if (typeof numeroCPF === "undefined") {
      return false;
    }

    if (numeroCPF.length !== 11) {
      return false;
    }

    if (this.checaSequencia(numeroCPF)) {
      return false;
    }

    this.cpf = numeroCPF;
  }

  limpaCPF(value) {
    return value.replace(/\D+/g, "");
  }

  cpfParcial() {
    return this.cpf.slice(0, -2);
  }

  checaSequencia(value) {
    const sequencia = value[0].repeat(value.length);
    return sequencia === value;
  }

  geraDigito(value) {
    const num2Array = Array.from(value);

    let numeroLength = num2Array.length + 1;
    const valor = num2Array.reduce((acumulador, num) => {
      acumulador += numeroLength * Number(num);
      numeroLength--;
      return acumulador;
    }, 0);

    let digito = 11 - (valor % 11);
    if (digito > 9) {
      digito = 0;
    }
    return String(digito);
  }

  geraNovoCPF() {
    const digito1 = this.geraDigito(this.cpfParcial());
    const digito2 = this.geraDigito(this.cpfParcial() + digito1);

    return this.cpfParcial() + digito1 + digito2;
  }

  checaCpfValido() {
    if (typeof this.cpf !== "undefined") {
      return this.cpf === this.geraNovoCPF();
    } else {
      return false;
    }
  }
}

const cpf = "032.901.879-50";
//const cpf = "111.111.111-11";
const validaCpf = new ValidaCPF();

validaCpf.setCPF = cpf;

if (validaCpf.checaCpfValido()) {
  console.log("CPF válido");
} else {
  console.log("CPF inválido");
}
