//funcoes podem retornar ou nao valor
function soma(a, b) {
  return a + b;
}
//console.log(soma(2, 5));

function criaPessoa(nome, sobrenome) {
  return { nome, sobrenome };
}
const p1 = criaPessoa("Luiz", "Otávio");

//funcao retornando outra funcao
function criaMultiplicador(multiplicador) {
  //retornando direto a funcao
  return function (n) {
    return n * multiplicador;
  };
}

const duplica = criaMultiplicador(2);
console.log(duplica(2));
const triplica = criaMultiplicador(3);
console.log(triplica(2));
const quadriplica = criaMultiplicador(4);
console.log(quadriplica(2));
