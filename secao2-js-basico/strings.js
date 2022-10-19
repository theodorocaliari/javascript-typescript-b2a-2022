//string é indexavel
let umaString = "O rato roeu a roupa do rei de roma.";
console.log(umaString[4]); //retorna a letra na posicao 4
console.log(umaString.charAt(6)); //retorna o elemento na posição do valor
console.log(umaString.concat(" Concatenado com concat."));
//pesquisar por um indice
console.log(umaString.indexOf("roeu")); //retorna o indice que inicia a palavra
console.log(umaString.indexOf("o", 3));
console.log(umaString.lastIndexOf("m", 3));

console.log(umaString.match(/[a-z]/g)); //expressao regular
console.log(umaString.search(/r/g)); //retorna o indice
console.log(umaString.replace(/r/g, "#")); //substituindo r por #

console.log(umaString.length);
console.log(umaString.slice(2, 6)); //fatia a string do indicie do inicio (2) até o fim (6)
console.log(umaString.slice(-3)); //ele começa e vai até o final (total da string menos o valor negativo) do indice 32 até o fim
console.log(umaString[32]); // output: m

console.log(umaString.slice(-5, umaString.length - 1));

console.log(umaString.split(" ")); //divide a string pelo caracter

console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());
