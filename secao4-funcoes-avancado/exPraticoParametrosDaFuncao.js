//... = rest operator (parametros indeterminados)
//o rest operator no argumento abaixo ira armazenar qualquer parametro passado após 'operador e acumulador'
//o rest operator precisa ser o ultimo
function conta(operador, acumulador, ...numeros) {
  console.log(operador, acumulador, numeros);
  for (let numero of numeros) {
    //console.log(numero);
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "/") acumulador /= numero;
    if (operador === "*") acumulador *= numero;
  }
  console.log(acumulador);
}
conta("+", 0, 20, 30, 40, 50);
