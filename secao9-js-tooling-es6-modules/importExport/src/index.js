import { nome as nome2, sobrenome, idade } from "./export";
import funcaoPadrao from "./export"; //quando importamos sem chave estamos chamando o DEFAULT do módulo

const nome = "Juca";

console.log(nome, nome2, sobrenome, idade);

console.log(funcaoPadrao(3, 3));
