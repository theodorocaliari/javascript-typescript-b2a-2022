//exemplo basico
//funcoes geradoras tem um recurso que "pausa o codigo em determinado local"
//o asterisco no nome da funcao identifica a funcao como geradora
function* geradora1() {
  //codigo qualquer...
  yield "valor 1";
  //codigo qualquer...
  yield "valor 2";
  //codigo qualquer...
  yield "valor 3";
}

//toda vez que chamamos o metodo next() ele retorna os valores em ordem da funcao geradora
const g1 = geradora1();
console.log(g1);
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());
console.log(g1.next()); //done: true
console.log(g1.next().value);

for (let valor of g1) {
  console.log(valor);
}

//gerador infinito
function* geradora2() {
  //contador
  let i = 0;
  while (true) {
    yield i;
    i++;
  }
}

const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

function* geradora3() {
  yield 0;
  yield 1;
  yield 2;
}

function* geradora4() {
  yield* geradora3();
  yield 3;
  yield 4;
  yield 5;
}

const g4 = geradora4();
for (let valor of g4) {
  console.log(valor);
}

function* geradora5() {
  yield function () {
    console.log("yield 1");
  };
  // ...
  yield function () {
    console.log("yield 2");
  };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();
