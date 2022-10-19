//Produto
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}
Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};
Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
  //linkamos as 2 funcoes produto e camiseta
  Produto.call(this, nome, preco);
  this.cor = cor;
}
//linkando os prototypes de produto em camiseta
Camiseta.prototype = Object.create(Produto.prototype); //com a porpriedade Object.create criamos um objeto vazio e passamos o prototype de produto -- isso é necessario para os metodos de aumento e desconto funcionarem para Camiseta
Camiseta.prototype.constructor = Camiseta; //o construtor é necessário para não "misturar" as informações dos Objetos

Camiseta.prototype.aumento = function (porcentagem) {
  return (this.preco = this.preco + this.preco * (porcentagem / 100));
};
Camiseta.prototype.desconto = function (porcentagem) {
  return (this.preco = this.preco - this.preco * (porcentagem / 100));
};

function Caneca(nome, preco, cor, material, estoque) {
  Camiseta.call(this, nome, preco, cor);
  this.material = material;

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: false,
    get: function () {
      return estoque;
    },
    set: function (valor) {
      if (typeof valor === "number") {
        estoque = valor;
      }
    },
  });
}
Caneca.prototype = Object.create(Camiseta.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto("Generico", 111);
const camiseta = new Camiseta("Regata", 7.5, "Preto");
const caneca = new Caneca("Helicoptero", 10, "Camuflada", "Porcelana", 5);
caneca.estoque = 100;

//camiseta.aumento(10);

console.log(produto);
console.log(camiseta);
console.log(caneca);
