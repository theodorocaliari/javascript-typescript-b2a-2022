//defineProperty - defineProperties
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  //configuramos permissoes especificas para chave do objeto configurada
  /*
  Object.defineProperties(this, {
    nome: {
      enumerable: true, //mostra a chave
      value: nome, //mostra o valor da chave
      writable: false, //permite alteracao do valor
      configurable: false, //nao permite apagar e reconfigurar
    },
    preco: {
      enumerable: true, //mostra a chave
      value: preco, //mostra o valor da chave
      writable: false, //permite alteracao do valor
      configurable: false, //nao permite apagar e reconfigurar
    },
  }); */
  Object.defineProperty(this, "estoque", {
    enumerable: true, //mostra a chave
    value: estoque, //mostra o valor da chave
    writable: false, //permite alteracao do valor
    configurable: false, //nao permite apagar e reconfigurar
  });
}

const p1 = new Produto("Camiseta", 20, 3);
p1.estoque = 500;
console.log(p1);
console.log(Object.keys(p1));
