class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, ""),
    });
  }

  sequencia() {
    return (
      this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo
    );
  }

  //para chamar um metodo estatico usamos o nome da classe
  geraNovoCPF() {
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
    const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
    const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);

    this.novoCPF = cpfSemDigitos + digito1 + digito2;
  }

  //podemos definir um metodo como static quando ele nao utiliza nenhum atributo ou metodo interno da classe
  // sem palavra 'this'
  static geraDigito(cpfSemDigitos) {
    let total = 0;
    let reverso = cpfSemDigitos.length + 1;

    for (let stringNum of cpfSemDigitos) {
      total += reverso * Number(stringNum);
      reverso--;
    }

    const digito = 11 - (total % 11);

    return digito > 9 ? "0" : String(digito);
  }

  valida() {
    if (!this.cpfLimpo) return false;
    if (typeof this.cpfLimpo === "undefined") return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.sequencia()) return false;
    this.geraNovoCPF();

    return this.novoCPF === this.cpfLimpo;
  }
}
