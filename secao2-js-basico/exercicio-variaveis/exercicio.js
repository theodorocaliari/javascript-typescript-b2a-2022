const nome = "Theodoro";
const sobrenome = "Caliari";
const idade = 41;
const peso = 120;
const alturaEmM = 1.8;
const anoAtual = new Date().getFullYear();
let indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
let anoNascimento = anoAtual - idade;

console.log(
  `${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal.toFixed(
    2
  )}. Ele nasceu em ${anoNascimento}.`
);
