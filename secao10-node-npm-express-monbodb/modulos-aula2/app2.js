const path = require("path"); //modulo padrao do node
const multiplicacao = require("./mod2");

//console.log(multiplicacao(2, 3));

//utilizamos o path.resolve quando não sabemos qual o lugar que o script ou aplicação vai rodar, ele vai ajustar as barras e diretorios para que a aplicação execute corretamente
console.log(path.resolve(__dirname, "..", "..", "arquivos", "imagens")); //exemplo

//caminho absoluto, da raiz do computador
///console.log(__filename); //caminho ate nome do arquivo
///console.log(__dirname); //caminho ate diretorio atual do arquivo
