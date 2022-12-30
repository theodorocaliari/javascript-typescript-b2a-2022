const path = require("path");
//const caminhoArquivo = path.resolve(__dirname, "teste.txt");
const caminhoArquivo2 = path.resolve(__dirname, "teste.json");

const escreve = require("./modules/escrever");
const ler = require("./modules/ler");

const pessoas = [{ nome: "João" }, { nome: "Maria" }, { nome: "Eduardo" }, { nome: "Luiza" }];

const json = JSON.stringify(pessoas, "", 2);

//escreve(caminhoArquivo2, json);

async function le_arquivo(caminho) {
  const dados = await ler(caminho);
  renderizaDados(dados);
  return dados;
}

//const dados_arquivo = le_arquivo(caminhoArquivo2).then((response) => console.log(response));

function renderizaDados(dados) {
  dados = JSON.parse(dados);
  //console.log(dados);
  dados.forEach((val) => console.log(val));
}

le_arquivo(caminhoArquivo2);
