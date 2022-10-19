const nome = "Theodoro";
const sobrenome = "Caliari";
const idade = 41;

export { nome, sobrenome, idade };
export { nome as outroNome, sobrenome as outroSobrenome };

export function teste() {
  console.log("teste");
}

export class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

//exportacoes default - o padrao e só pode existir 1 no modulo
export default (a, b) => a + b;

//export default function (){};
//export default function funcao(){};
//export {name1 as default};
