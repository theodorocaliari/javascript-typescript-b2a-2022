const data = new Date(); //new funcao construtora
const dataFormatoGringo = data.toString();
const dataEpocaUnix_MarcoZero = new Date(0); //01/01/1970

//sempre numeros o mes é o numero 3 e é o mes de abril pois os meses iniciam com zero
//minimo 2 parametros, se for um parametro ele considera como milesimo de segundo
const dataParametrosNumeros = new Date(2019, 3, 20, 15, 14, 27, 1000); //ANO, MES, DIA, HORA, MIN, SEG, MSEG
const dataString = "2019-04-20 20:20:59";
const dataComDataString = new Date(dataString);

console.log(data.toString());
console.log(dataParametrosNumeros.toString());
console.log(dataComDataString.toString());

const dia = data.getDate();
const mes = data.getMonth(); //0 - Janeiro, 11-Dezembro
const ano = data.getFullYear();
const hora = data.getHours();
const min = data.getMinutes();
const seg = data.getSeconds();
const mseg = data.getMilliseconds();
const diaSemana = data.getDay(); //0 - domingo, 6 - sab

const dateNow = Date.now(); //milesemos de segundo do marco zero até data atual
const converteDateNowParaAtual = new Date(dateNow);

console.log(dateNow);
console.log(converteDateNowParaAtual);

//
/// exemplo pratico funcao formata data
function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  //console.log(data);
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const date = new Date();
const dataBrasil = formataData(data);

console.log(dataBrasil);
