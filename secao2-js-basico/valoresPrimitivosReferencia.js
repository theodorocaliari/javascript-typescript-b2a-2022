/*
  Primitivos (imutaveis) - string, number, boolean, undefined, null (bigint, symbol)

  Referencia (mutavel) - array, object, function - apontam para o mesmo endereço/local na memoria

*/

let nome = "Luiz";
nome[0] = "R";
console.log(nome[0]); //exemplo de que a string é um valor imutavel

let a1 = "A";
let b1 = a1; //copia
a1 = "outra coisa";
console.log(a1, b1);

//referencia
let a2 = [1, 2, 3];
let b2 = [...a2]; //SPREAD de a2 em e copiando o valor em b2
let c2 = b2;
console.log(c2, b2);

a2.push(4);
console.log(a2, b2);

b2.pop();
console.log(a2, c2);

a2.push("Theo");
console.log(a2, c2);

//referencia objeto
const a3 = {
  nome: "Theo",
  sobrenome: "Caliari",
};
const b3 = { ...a3 }; //torna independente (muda a referencia)

b3.nome = "Davi";
console.log(a3);
console.log(b3);
