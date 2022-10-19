const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const [primeiroNumero, segundoNumero, ...resto] = numeros; //desestruturacao

console.log(primeiroNumero, segundoNumero);
//console.log(resto);

const [n1, , n3, , n5] = numeros; //o espaco vazio são
console.log(n1, n3, n5);

//arrays
const numeros2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const [lista1, lista2, lista3] = numeros2;
console.log(lista3[2]);
