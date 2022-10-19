//objeto literal
const pessoa1 = {
  nome: "Theodoro",
  sobrenome: "Caliari",
  idade: 42,
};

//console.log(pessoa1.nome);

//funcao cria o ojeto
function criaPessoa(nome, sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,
  };
}

const pessoa2 = criaPessoa("Theodoro", "Caliari", 41);
const pessoa3 = criaPessoa("Felipe", "Caliari", 36);
const pessoa4 = criaPessoa("Tania", "Caliari", 37);

console.log(pessoa2.nome);
console.log(pessoa3.nome);
console.log(pessoa4.nome);

//objetos e metodos
const pessoa5 = {
  nome: "Theodoro",
  sobrenome: "Caliari",
  idade: 42,

  //metodos
  fala() {
    //'this' faz a referencia para o contexto do objeto
    console.log(`A minha idade atual é ${this.idade}.`);
  },
  incrementaIdade() {
    this.idade++;
  },
};

pessoa5.fala();
pessoa5.incrementaIdade();
pessoa5.fala();
