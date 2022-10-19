//funcao recursiva chama ela mesma
//existe um limite de memoria/stack que pode interromper a execução da recursividade da funcao
function recursiva(max) {
  if (max >= 10) return;
  max++;
  console.log(max);
  recursiva(max);
}

recursiva(0);
