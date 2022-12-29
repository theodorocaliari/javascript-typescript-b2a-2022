const nome = "Theodoro";
const sobrenome = "Caliari";

const falanome = () => {
  //console.log(nome, sobrenome);
  return `${nome} ${sobrenome}`;
};

module.exports.nome = nome; //exportando a chave nome com o valor nome
module.exports.sobrenome = sobrenome;
module.exports.falanome = falanome();

//console.log(module.exports);

exports.sobrenome = sobrenome;

//console.log(exports);

exports.meuObj = {
  nome: nome,
  sobrenome: sobrenome,
  falanome,
};

//console.log(module);
