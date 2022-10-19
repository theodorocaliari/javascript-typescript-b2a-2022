//declaracao classica de funcao
//quando declaramos a funcao ocorre o hoisting - o javascript coloca no topo do arquivo na hora da execução
falaOi();
function falaOi() {
  console.log("oi");
}

//first-class object : funcoes são funcoes de primeira classe
//function expression
//funcoes tratada como um dado
const souUmDado = function () {
  console.log("sou um dado");
};
souUmDado();

//arrow function
const arrowFunction = () => {
  console.log("sou arrow function");
};
arrowFunction();

//dentro de um objeto
const obj = {
  falar() {
    console.log("estou falando...");
  },
};
obj.falar();
