//superclass
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}
Conta.prototype.sacar = function (valor) {
  if (this.saldo < valor) {
    console.log(`Saldo insuficiente: R$ ${this.saldo.toFixed(2)}`);
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};
Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};
Conta.prototype.verSaldo = function () {
  console.log(
    `Agência: ${this.agencia} Conta: ${
      this.conta
    } Saldo: R$ ${this.saldo.toFixed(2)}`
  );
};

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo); //
  this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype); //link entre os prototypes
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
  if (valor > this.saldo + this.limite) {
    console.log(`Saldo insuficiente: R$ ${this.saldo.toFixed(2)}`);
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const conta1 = new ContaCorrente(11, 22, 0, 100);

conta1.depositar(100);
conta1.sacar(100);
