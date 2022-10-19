function retornaFuncao() {
  const nome = "Theo";
  return function () {
    return nome;
  };
}

const funcao = retornaFuncao();
console.dir(funcao); //navegador
