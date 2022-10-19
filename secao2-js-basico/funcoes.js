function saudacao(nome) {
  return `Bom dia ${nome}!`;
}

const variavel = saudacao("Theo");
console.log(variavel);

function soma(x, y) {
  const resultado = x + y;
  return resultado;
}

console.log(soma(2, 3));

//funcao anonima
const raiz = function (n) {
  return Math.sqrt(n);
};

console.log(raiz(9));

//arrow function
/*
const raiz2 = (n) => {
  return Math.sqrt(n);
};*/
//simplificacao arrow function
const raiz2 = (n) => Math.sqrt(n);

console.log(raiz2(225));
