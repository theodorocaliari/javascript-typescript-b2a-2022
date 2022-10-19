const pessoa = {
  nome: "Theo",
  sobrenome: "Caliari",
  idade: 41,
  endereco: {
    rua: "Av Brasil",
    numero: 320,
  },
};

//atribuicao por desestruturacao
const {
  nome: n = "",
  sobrenome,
  endereco: { rua, numero: num },
} = pessoa;
console.log(n, sobrenome, num);

const { ...resto } = pessoa;
console.log(resto);
