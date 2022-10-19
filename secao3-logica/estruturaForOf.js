//for of -> retorna o valor funciona com arrays com objetos não

const nome = "Theodoro";
for (let valor of nome) {
  //console.log(valor);
}

const nomes = ["Theodoro", "Davi", "Felipe"];
for (let valor of nomes) {
  console.log(valor);
}

//objeto
const pessoa = {
  nome: "Juca",
  idade: 10,
  endereco: {
    rua: "Joaquina",
    numero: 20,
  },
};

for (let valor of pessoa) {
  console.log(valor);
}
