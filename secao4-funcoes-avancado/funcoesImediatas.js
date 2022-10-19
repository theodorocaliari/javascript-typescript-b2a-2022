//IIFE - Imediately invoked function expression
(function (idade, peso, altura) {
  const sobrenome = "Caliari";
  function criaNome(nome) {
    return `${nome} ${sobrenome}`;
  }
  function falaNome() {
    console.log(criaNome("Theodoro"));
  }

  falaNome();
  console.log(idade, peso, altura);
})(30, 80, 1.8);
