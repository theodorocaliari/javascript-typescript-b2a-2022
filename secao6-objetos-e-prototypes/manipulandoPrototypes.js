const objA = {
  chaveA: "A",
};
const objB = {
  chaveB: "B",
};
const objC = {
  chaveC: "C",
};

//mais facil vizualizar essa 'cadeia' no navegador
//definindo prototype para outro projeto seria como uma herança
Object.setPrototypeOf(objB, objA); //prototype do objeto B vai ser o A
Object.setPrototypeOf(objC, objB); //prototype do objeto C vai ser o B

//construtor
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
  return (this.preco = this.preco - (this.preco * percentual) / 100);
};
Produto.prototype.aumento = function (percentual) {
  return (this.preco = this.preco + (this.preco * percentual) / 100);
};

const p1 = new Produto("Camiseta", 50);
//p1.desconto(100);
//p1.aumento(100);

//objeto literal
const p2 = {
  nome: "Caneca",
  preco: 15,
};
Object.setPrototypeOf(p2, Produto.prototype);

console.log(p1);
console.log(p2.aumento(10));

//criando um objeto e definindo o prototype(pai) dele
const p3 = Object.create(Produto.prototype, {
  //opcional
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 99,
  },
  tamanho: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 42,
  },
});

console.log(p3.aumento(10));
