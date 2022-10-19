/*
  escopo lexico a funcao reconhece o que esta declarado dentro dela, 
  se não encontrar no escopo dela, ela sobe para o pai até o global
  se não encontrar no escopo global estoura um erro de nao definido
  a funcao reconhece o local em que foi criada / declarada / escrita
  isso é o escopo lexico, executar a funcao é diferente de declarar a funcao
 */
const nome = "Theo";
function falaNome() {
  console.log(nome);
}

function usaFalaNome() {
  const nome = "Caliari";
  falaNome();
}

usaFalaNome();
