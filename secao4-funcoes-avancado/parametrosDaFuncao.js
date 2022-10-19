function funcao() {
  //arguments só existe em funções criadas com a palavra FUNCTION
  console.log(arguments); //arguments armazena os parametros passados para a funcao quando não é definido parametro

  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }
  console.log(total);
}
//funcao(1, 2, 3, 4, 5, 6, 7);

function funcao2(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f);
}
//funcao2(1, 2, 3);

//valor padrao antigamente
function funcao3(a, b = 2, c = 4) {
  console.log(a + b + c);
}
//passando o arguento como undefined ele considera o valor padrao
//não é uma boa pratica
//funcao3(2, undefined, 20);

//desestruturacao funciona com objeto e array
function funcao4({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}
let obj = { nome: "luiz", sobrenome: "otavio", idade: 20 };
funcao4(obj);
