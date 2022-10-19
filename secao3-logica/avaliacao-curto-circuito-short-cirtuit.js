/*
valores que a linguagem javascript avalia como FALSE
qualquer valores diferentes desses abaixos o javascript considera como TRUE

false
0
(vazios) - '' "" ``
null / undefined
NaN

OPERADOR &&
A avaliação em curto circuito é o valor retornado quando a expressão logica encontra um valor FALSE, 
se todos os valores forem TRUE é retornado o ultimo valor da expressão;

OPERADOR ||
A avaliação em curto circuito é o valor retornado quando a expressão logica encontra um valor TRUE, 
se todos os valores forem FALSE é retornado o ultimo valor da expressão;
*/

//EXEMPLO OPERADOR &&
let expressaoAllTrue = "Maria" && "Elisa" && "Tania";
let expressaoOneFalse = "Maria" && "" && "Tania";

console.log(expressaoAllTrue); //retorna Tania (ultimo valor da expressao)
console.log(expressaoOneFalse); //retorna vazio (o valor false da expressao)

//outro exemplo de expressao curto circuito OPERADOR &&

function falaOi() {
  return "Oi";
}
let vaiExecutar = false;

console.log(vaiExecutar && falaOi());

//EXEMPLO OPERADOR ||

let a = 0;
let b = null;
let c = "false";
let d = false;
let e = NaN;
console.log(a || b || c || d || e); //retorna o valor em string (string verdadeiro)

a = 0;
b = null;
c = false;
d = false;
e = NaN;
console.log(a || b || c || d || e); //retorna o ultimo valor da expressao (todos falsos)
