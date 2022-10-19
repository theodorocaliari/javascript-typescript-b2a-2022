//callback é uma função que é executada após uma ação anterior terminar de ocorrer
function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}

function f1(callback) {
  //setTimeout para simular algum recurso que pode demorar para executar
  setTimeout(function () {
    console.log("f1");
    if (callback) callback();
  }, rand());
}
function f2(callback) {
  setTimeout(function () {
    console.log("f2");
    if (callback) callback();
  }, rand());
}
function f3(callback) {
  setTimeout(function () {
    console.log("f3");
    if (callback) callback();
  }, rand());
}

//callback HELL
//com o callback conseguimos controlar a ordem de execução de cada funcao
//a funcao f2 não executa enquanto a f1 não terminar e assim por diante
f1(function () {
  f2(function () {
    f3(function () {
      console.log("ola mundo");
    });
  });
});

//outra maneira de escrever o codigo acima / boa pratica
f1(f1Callback);
function f1Callback() {
  f2(f2Callback);
}

function f2Callback() {
  f3(f3Callback);
}

function f3Callback() {
  console.log("ola mundo");
}
