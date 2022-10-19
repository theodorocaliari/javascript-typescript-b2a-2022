function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("os valores precisam ser números"); //lancando o erro
  }
  return x + y;
}

//tratando o erro lançado acima
try {
  //executada quando nao há erros
  //console.log(soma("1", 2));
} catch (error) {
  //executada quando há erros
  //console.log(error);
} finally {
  //executado sempre
}

function retornaHora(data) {
  //verifica se a valiavel é instancia da funcao construtora Date
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando instância de Date.");
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString("pt-br", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

try {
  const data = new Date("01-01-1970 12:00:00");
  const hora = retornaHora(11);
  console.log(hora);
} catch (err) {
  //tratar erro
  console.log("Erro 😡");
} finally {
  console.log("Acabou");
}
