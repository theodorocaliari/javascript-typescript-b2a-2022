//filter - filtra
//map - modifica
//reduce - reduz em um unico valor

//Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const maiorQue10 = [];
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > 10) {
    maiorQue10.push(numeros[i]);
  }
}
//console.log(maiorQue10);

function callbackFilter(valorElemento, indiceElemento, arrayCompleto) {
  if (valorElemento > 10) {
    return true;
  }
  return false;
}
const numerosFiltrados = numeros.filter(callbackFilter);
//console.log(numerosFiltrados);

//reduzindo
const reduzindoAEscrita = numeros.filter((valor) => valor > 10);
//console.log(reduzindoAEscrita);

//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com a
const pessoas = [
  { nome: "Theodoro", idade: 41 },
  { nome: "Lipe", idade: 36 },
  { nome: "Tania", idade: 37 },
  { nome: "Davi", idade: 12 },
  { nome: "Elisa", idade: 4 },
  { nome: "Naiara", idade: 38 },
  { nome: "Grasi", idade: 36 },
];

function callbackFilterPessoas(obj, index, array) {
  if (obj.nome.length >= 6) {
    return true;
  }
  return false;
}

function callbackFilterPessoasMaisVelhas(obj, index, array) {
  if (obj.idade >= 40) {
    return true;
  }
}

function callbackFilterPessoaTerminaComA(obj, index, array) {
  return obj.nome.toLowerCase().endsWith("a");
}

const pessoasComNomeGrande = pessoas.filter(callbackFilterPessoaTerminaComA);
console.log(pessoasComNomeGrande);
