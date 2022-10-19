//no javascript é importante manter o mesmo tipo de dados no array, ele aceita tipos diferentes mas não é uma boa pratica
let alunos = ["Marcos", "Maria", "João"]; //elemento com colchetes é array

alunos[0] = "Eduardo"; //alterando o elemento no indice 0
alunos[3] = "Lucia"; //adicionando elemento no indice 3

alunos.length; // tamanho do array

alunos[alunos.length] = "Luiza"; //adiciona elementos ao final do array
alunos[alunos.length] = "Fabio";

alunos.push("Lucas"); //adiciona elemento no final do array (funcao)
alunos.unshift("José"); //adiciona no inicio e "empurra" os outros para o proximo indice

let removido = alunos.pop(); //remove o ultimo elemento do array
let removidoComeco = alunos.shift(); //remove o primeiro elemento e altera os indices

delete alunos[3]; //apaga o elemento sem alterar o indice mas fica um espaço vazio no array

alunos[50]; //acesso de indice que não existe no array retorna UNDEFINED

//fatiamento
alunos.slice(0, 3); //"corta a o ultimo elemento não é incluido
alunos.slice(0, -1);

typeof alunos; //output: object
alunos instanceof Array; //retorna true se for array

console.log(removido);
console.log(alunos);
console.log(alunos[0]); //acessando o elemento no indice 0
