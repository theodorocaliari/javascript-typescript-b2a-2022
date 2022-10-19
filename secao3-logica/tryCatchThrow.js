/*
try - tenta
catch - captura
throw - lanca 
*/

function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("os valores precisam ser números"); //lancando o erro
  }
  return x + y;
}

//tratando o erro lançado acima
try {
  //executada quando nao há erros
  console.log(soma("1", 2));
} catch (error) {
  //executada quando há erros
  console.log(error);
}
