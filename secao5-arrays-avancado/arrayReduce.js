//reduce é mais utilizado para reduzir o array em um unico elemento
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function (acumulador, valor, indice, array) {
  //console.log(acumulador, valor);
  acumulador += valor;
  return acumulador;
}, 0); //zero é o valor inicial passado para o acumulador
//console.log(total);

const acumuladorArray = numeros.reduce(function (
  acumulador,
  valor,
  indice,
  array
) {
  //console.log(acumulador);
  if (valor % 2 === 0) {
    acumulador.push(valor);
  }
  return acumulador;
},
[]);
//console.log(acumuladorArray);

const pares = numeros.reduce(function (acumulador, valor, indice, array) {
  //console.log(acumulador, valor);
  if (valor % 2 === 0) {
    acumulador += valor;
  }
  return acumulador;
}, 0); //zero é o valor inicial passado para o acumulador
//console.log(pares);

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Rosana", idade: 64 },
  { nome: "Wallace", idade: 47 },
];

const pessoaMaisVelha = pessoas.reduce(function (acumulador, valor) {
  if (acumulador.idade > valor.idade) return acumulador;
  return valor;
});

console.log(pessoaMaisVelha);
