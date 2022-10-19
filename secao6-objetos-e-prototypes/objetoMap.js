const pessoas = [
  { id: 3, nome: "Luiz" },
  { id: 2, nome: "Maria" },
  { id: 1, nome: "Helena" },
];

//o algoritmo dessa maneira altera a ordem dos dados
//a chave do objeto fica como string e é ordenado ASC independente da ordenação dos dados recebidos
const novasPessoas2 = {};
for (const pessoa2 of pessoas) {
  const { id } = pessoa2;
  novasPessoas2[id] = { ...pessoa2 };
}
console.log(novasPessoas2);

//estrutura de dados Map()
//o map mantem a chave como number e a ordem também se mantém
const novasPessoas = new Map();

for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas.set(id, { ...pessoa });
}

console.log(novasPessoas);
console.log(novasPessoas.get(2));

for (const [identifier, { id, nome }] of novasPessoas) {
  console.log(identifier, id, nome);
}

for (const keys of novasPessoas.keys()) {
  console.log(keys);
}
for (const values of novasPessoas.values()) {
  console.log(values);
}
novasPessoas.delete(2);
console.log(novasPessoas);
