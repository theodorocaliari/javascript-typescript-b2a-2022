const nome = "Theodoro";
const sobrenome = "Caliari";

const falanome = () => {
  console.log(nome, sobrenome);
};

module.exports.nome = nome;

exports.sobrenome = sobrenome;

exports.meuObj = {
  nome: nome,
  sobrenome: sobrenome,
};

//console.log(module);
