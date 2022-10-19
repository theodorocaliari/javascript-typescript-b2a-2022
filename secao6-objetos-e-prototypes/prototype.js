//Construtora -> molde(classe)
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  //cada objeto criado cria um metodo proprio, isso prejudica a performance
  //this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`;
}

Pessoa.prototype.estouAqui = "Aqui estou";
Pessoa.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

//instancia -> criando objetos
const pessoa1 = new Pessoa("Luiz", "O.");
const pessoa2 = new Pessoa("Maria", "A.");

console.dir(pessoa1);
console.dir(pessoa2);
console.dir(pessoa1.estouAqui);
console.dir(pessoa2.estouAqui);
console.dir(pessoa1.nomeCompleto());
