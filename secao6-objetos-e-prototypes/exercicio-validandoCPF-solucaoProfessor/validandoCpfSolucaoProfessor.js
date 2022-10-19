//funcao construtora (molde/classe)
function ValidaCPF(cpfEnviado) {
  Object.defineProperty(this, "cpfLimpo", {
    enumerable: true, //exibe no console o metodo
    get: function () {
      return cpfEnviado.replace(/\D+/g, "");
    },
  });
}

ValidaCPF.prototype.valida = function () {
  if (typeof this.cpfLimpo === "undefined") {
    return false;
  }
  if (this.cpfLimpo.length !== 11) {
    return false;
  }

  if (this.isSequencia()) {
    return false;
  }
  const cpfParcial = this.cpfLimpo.slice(0, -2); //cria um array desconsiderando os 2 ultimos digitos
  const digito1 = this.criaDigito(cpfParcial);
  const digito2 = this.criaDigito(cpfParcial + digito1);
  const novoCPF = cpfParcial + digito1 + digito2;

  return novoCPF === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
  const cpfArray = Array.from(cpfParcial);

  let regressivo = cpfArray.length + 1; //contador regressivo baseado nos digitos do CPF
  const total = cpfArray.reduce((acumulador, valorAtual) => {
    acumulador += regressivo * Number(valorAtual);
    regressivo--;
    return acumulador;
  }, 0);

  const digito = 11 - (total % 11);
  return digito > 9 ? "0" : String(digito);
};

ValidaCPF.prototype.isSequencia = function () {
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length); //repete o numero de vezes do length
  return sequencia === this.cpfLimpo;
};

const cpf = new ValidaCPF("032.901.879-50");
console.log(cpf.valida());
