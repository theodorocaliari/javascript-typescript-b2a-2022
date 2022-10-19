//dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const dobroNumeros = numeros.map((valor) => valor * 2);
//console.log(dobroNumeros);

//retorne apenas uma string com o nome da pessoa
//remova apenas a chave 'nome' do objeto
//adicione uma chave id em cada objeto
const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

const nomePessoa = pessoas.map((obj) => obj.nome);
console.log(nomePessoa);

const idadePessoa = pessoas.map((obj) => ({ idade: obj.idade }));
console.log(idadePessoa);

const addIdPessoa = pessoas.map((obj, index) => {
  //o obj é um parametro de referencia, ao alterarmos ele alteramos o objeto/array original
  //para evitar este tipo de situação é interessante criar uma cópia e fazer as alterações na cópia
  const copiaObj = { ...obj };
  copiaObj.id = (index + 1) * 1000;
  return copiaObj;
});
console.log(pessoas);
console.log(addIdPessoa);
