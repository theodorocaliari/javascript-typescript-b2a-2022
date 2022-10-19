//promises = promessas
//promises sao responsaveis por aguardar um retorno que não temos noção do tempo de retorno

function rand(min, max) {
  max *= 1000;
  min *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function simulaTempoRetorno(msg, tempo) {
  setTimeout(() => {
    console.log(msg);
  }, tempo);
}

function simulaTempoRetornoComCallback(msg, tempo, callback) {
  setTimeout(() => {
    console.log(msg);
    if (callback) callback();
  }, tempo);
}

function simulaTempoRetornoComPromise(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("erro");
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}
/*
//impossivel manter a ordem após execucao
simulaTempoRetorno("Informação recebida 1", rand(1, 3));
simulaTempoRetorno("Informação recebida 2", rand(1, 3));
simulaTempoRetorno("Informação recebida 3", rand(1, 3));

//com callback podemos manter a ordem da execucao, termina o primeiro executa o segundo
simulaTempoRetornoComCallback("Informação recebida 1", rand(1, 3), function () {
  simulaTempoRetornoComCallback("Informação recebida 2", rand(1, 3), function () {
    simulaTempoRetornoComCallback("Informação recebida 3", rand(1, 3));
  });
});*/

//todo resolve cai no them, e o reject no catch
simulaTempoRetornoComPromise("Informação recebida 1", rand(1, 3))
  .then((resposta) => {
    console.log(resposta);
    //promisse
    return simulaTempoRetornoComPromise(222222, rand(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
    return simulaTempoRetornoComPromise("Informação recebida 3", rand(1, 3));
  })
  .then((resposta) => console.log(resposta))
  .catch((e) => console.log("ERRO:", e));
