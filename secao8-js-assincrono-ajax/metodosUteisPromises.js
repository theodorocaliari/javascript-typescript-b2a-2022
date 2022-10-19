function rand(min, max) {
  max *= 1000;
  min *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function simulaTempoRetorno(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("Cai no Reject");
        return;
      }

      resolve(msg.toUpperCase());
      return;
    }, tempo);
  });
}

//Promise.all, Promise.race, Promise.resolve, Promise.reject
const promisesArray = [
  //"Primeiro valor",
  simulaTempoRetorno("Promise 1", 3),
  simulaTempoRetorno("Pormise 2", 0.5),
  simulaTempoRetorno("Promise 3", 1),
  simulaTempoRetorno(1000, 1),
  //"Outro valor",
];

//all - entrega todas as promises resolvidas em um array
//se uma "entrega" der errado ele rejeita todas as "entregas"
Promise.all(promisesArray)
  .then(function (valor) {
    console.log(`all: ${valor}`);
  })
  .catch(function (erro) {
    console.log(`all: ${erro}`);
  });

//race - encontra e entrega o primeiro valor ja resolvido
//a "entrega" mais rapida vence e as demais são ignoradas
Promise.race(promisesArray)
  .then(function (valor) {
    console.log(`race: ${valor}`);
  })
  .catch(function (erro) {
    console.log(`race: ${erro}`);
  });

//resolve & reject - verifica

Promise.resolve(promisesArray)
  .then(function (valor) {
    console.log(`race: ${valor}`);
  })
  .catch(function (erro) {
    console.log(`race: ${erro}`);
  });

function baixaPagina() {
  const emCache = true;

  if (emCache) {
    //resolve retorna uma promessa resolvida
    //reject retorna uma promessa que falhou e é capturada pelo catch
    return Promise.resolve("Pagina em cache");
  } else {
    return simulaTempoRetorno("Baixei a pagina", 3);
  }
}

baixaPagina()
  .then((dadosPagina) => console.log(dadosPagina))
  .catch((e) => console.log(e));
