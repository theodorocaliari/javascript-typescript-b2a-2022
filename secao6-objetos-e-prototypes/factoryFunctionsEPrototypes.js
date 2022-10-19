//factory function
function criaPessoa(nome, sobrenome) {
  const pessoaPrototype = {
    falar() {
      console.log(`${this.nome} esta falando.`);
    },
    comer() {
      console.log(`${this.nome} esta comendo.`);
    },
    beber() {
      console.log(`${this.nome} esta bebendo.`);
    },
  };

  //aclopar o prototype ao Objeto que estou criando
  //as propriedades são passadas como um objeto e cada propriedade contem um objeto
  //a vantagem de desenvolver um codigo assim é a economia de recursos computacionais
  //a cada objeto criado não são criados novos metodos, os metodos são aclopados do objeto pai
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });
}

//nao tem a palavra 'new'
const p1 = criaPessoa("Luiz", "Otávio");
console.log(p1.falar());

//desacoplando um pouco mais - composição/mixin: compor com varios outros objetos
//podemos utilizar os metodos abaixo em qual objeto quiser não só em pessoa
const falar = {
  falar() {
    console.log(`${this.nome} esta falando.`);
  },
};
const comer = {
  comer() {
    console.log(`${this.nome} esta comendo.`);
  },
};
const beber = {
  beber() {
    console.log(`${this.nome} esta bebendo.`);
  },
};

//consigo unir o que eu preciso em 'pessoaPrototype'
//qualquer metodo modificado, também será modificado nos objetos que o utilizam
let pessoaPrototype = { ...falar, ...comer, ...beber }; //spread operator
pessoaPrototype = Object.assign({}, falar, comer, beber); //criamos um objeto vazio como referencia e passamos os metodos

function criaPessoa2(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });
}

const p2 = criaPessoa2("Maria", "A.");
console.log(p2.falar());
