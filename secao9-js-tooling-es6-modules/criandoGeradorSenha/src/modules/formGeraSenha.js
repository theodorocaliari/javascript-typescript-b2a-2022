import GeraSenha from "./GeraSenha";

const senhaGerada = document.querySelector(".senha-gerada");
const numbers = document.querySelector("#numbers");
const lowercase = document.querySelector("#lowercase");
const uppercase = document.querySelector("#uppercase");
const symbols = document.querySelector("#symbols");
const length = document.querySelector("#length");
const generate = document.querySelector("#generate");
//const copy = document.querySelector("#copy");

export default () => {
  generate.addEventListener("click", (e) => {
    e.preventDefault();
    const geraSenha = new GeraSenha(length.value, numbers.checked, lowercase.checked, uppercase.checked, symbols.checked);
    const senha = geraSenha.gerasenha();
    senhaGerada.innerHTML = senha;
  });
};
