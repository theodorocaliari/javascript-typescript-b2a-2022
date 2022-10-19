//indices
//positivo        0         1         2         3        4
//negativo        -5        -4        -3        -2      -1
const nomes = ["Maria", "Eduardo", "Gabriel", "João", "Júlia"];
//nomes.splice(indice atual, n elementos remover, elementos para add, todos separados por virgula);
let removidos, adicionado;

//pop - remove o ultimo elemento
//removidos = nomes.splice(4, 1); //remove a partir do indice 4, 1 elemento
//removidos = nomes.splice(-1, 1);
//Number.MAX_VALUE; // maior numero do javascript

//shift - remove o primeiro elemento
//removidos = nomes.splice(0, 1);

//adicionado = nomes.splice(3, 0, "Lucas");
//push - adiciona um elemento no final do array
adicionado = nomes.splice(nomes.length, 0, "Pedro");

//unshift - adiciona no inicio do array
adicionado = nomes.splice(0, 0, "Felipe");

console.log(nomes, adicionado, removidos);
