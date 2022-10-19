function rand(min = 0, max = 3) {
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

//async permite usar o await dentro da função que espera a promise ser finalizada
//promise tem 3 estados:
// pending -> pendente (esta sendo executada e não retornou o valor)
// fullfilled -> resolvida
// rejected -> rejeitada
async function executa() {
  try {
    const fase1 = simulaTempoRetorno("Fase 1", 1000);
    setTimeout(function () {
      console.log("Essa promisse estava pendente: ", fase1);
    }, 1100);
    console.log(fase1);
    const fase2 = await simulaTempoRetorno("Fase 2", rand());
    console.log(fase2);
    const fase3 = await simulaTempoRetorno("Fase 3", rand());
    console.log(fase3);
    console.log("Terminamos na fase: ", fase3);
  } catch (e) {
    console.log(e);
  }
}

executa();
