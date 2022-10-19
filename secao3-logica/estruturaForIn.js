//for in -> le os indices ou chaves do objeto (array, strings, objetos)

const frutas = ["Manga", "Uva", "Lima", "Banana"];

for (let indice in frutas) {
  console.log(indice);
}

const pessoa = {
  nome: "Juca",
  idade: 10,
  endereco: {
    rua: "Joaquina",
    numero: 20,
  },
};

for (let key in pessoa) {
  console.log(key);
}
