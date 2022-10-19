//padrao IEEE 754 - 2008 (PRECISAO DOS NUMEROS)

let num1 = 1500;
let num2 = 2.5;
let temp = num1 * "abc";
//numero em binario
//console.log(num1.toString(2));
//console.log(num2.toFixed(2));
//console.log(Number.isInteger(num1));
//console.log(Number.isNaN(temp)); //checa se valor nao é um valor numerico

// IMPRECISAO
num1 = 0.7;
num2 = 0.1;
//console.log(num1 + num2);

for (let i = 0; i <= 12; i++) {
  num1 += num2;
}
num1 = Number(num1.toFixed(2)); //corrigindo a imprecisão

console.log(num1.toFixed(2));
console.log(Number.isInteger(num1));
