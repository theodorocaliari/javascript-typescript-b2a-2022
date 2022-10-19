//notacao literal
const pessoa = {
  nome: "Theodoro",
  sobrenome: "Caliari",
};

//notacao construtor
const pessoa1 = new Object();
pessoa1.nome = "Theodoro";
pessoa1.sobrenome = "Caliari";
pessoa1.idade = 41;
pessoa1.falarNome = function () {
  return `${this.nome} esta falando seu nome`;
};
pessoa1.getDataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1);
console.log(pessoa1.getDataNascimento());

//factroy functions /constructor functions / classes
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  Object.freeze(this); //impede qualquer alteração de valores no objeto
}

const p1 = new Pessoa("Theodoro", "Caliari");
p1.nome = "Felipe";
console.log(p1);
