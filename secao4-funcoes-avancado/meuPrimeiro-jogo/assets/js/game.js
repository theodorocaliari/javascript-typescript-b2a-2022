function game(numeroQuestoes, respostaUsuario) {
  let continuar, contador, respostaCorreta, respostaUsuario;
  respostaUsuario = Number(respostaUsuario);
  const randomRange = (min, max) => Math.random() * (max - min) + min;

  function operacaoMatematica(operation, n1, n2, answer = null) {
    const objOperacoes = {
      adicao: {
        equacaoString(n1, n2) {
          return `${n1} + ${n2}`;
        },
        equacao(n1, n2) {
          return n1 + n2;
        },
        answerCheck(answer) {
          return this.equacao(n1, n2) === answer;
        },
      },

      subtracao: {
        equacaoString(n1, n2) {
          return `${n1} - ${n2}`;
        },
        equacao(n1, n2) {
          return n1 - n2;
        },
        answerCheck(answer) {
          return this.equacao(n1, n2) === answer;
        },
      },

      multiplicacao: {
        equacaoString(n1, n2) {
          return `${n1} * ${n2}`;
        },
        equacao(n1, n2) {
          return n1 * n2;
        },
        answerCheck(answer) {
          return this.equacao(n1, n2) === answer;
        },
      },

      divisao: {
        equacaoString(n1, n2) {
          return `${n1} / ${n2}`;
        },
        equacao(n1, n2) {
          return n1 / n2;
        },
        answerCheck(answer) {
          return this.equacao(n1, n2) === answer;
        },
      },
    };
    console.log(objOperacoes[operation].equacaoString(n1, n2));
    return objOperacoes[operation].answerCheck(answer);
  }
  continuar = true;
  contador = 0;
  respostaCorreta = true;

  while (continuar && contador < numeroQuestoes) {
    let operadores = randomRange(1, 4);
    let n1 = Math.round(randomRange(10, 89));
    let n2 = Math.round(randomRange(10, 69));
    let operacao, controle;

    switch (Math.round(operadores)) {
      case 1:
        operacao = "adicao";
        respostaCorreta = operacaoMatematica(operacao, n1, n2, respostaUsuario);
        console.log(respostaCorreta);
        if (respostaCorreta === false) continuar = false;
        break;
      case 2:
        operacao = "subtracao";
        respostaCorreta = operacaoMatematica(operacao, n1, n2, respostaUsuario);
        console.log(respostaCorreta);
        if (respostaCorreta === false) continuar = false;
        break;
      case 3:
        operacao = "multiplicacao";
        respostaCorreta = operacaoMatematica(operacao, n1, n2, respostaUsuario);
        console.log(respostaCorreta);
        if (respostaCorreta === false) continuar = false;
        break;
      case 4:
        operacao = "divisao";
        respostaCorreta = operacaoMatematica(operacao, n1, n2, respostaUsuario);
        console.log(respostaCorreta);
        if (respostaCorreta === false) continuar = false;
        break;
      default:
        break;
    }

    contador++;

    if (controle === false) {
    }
  }

  if (respostaCorreta === false) {
    console.log("Game Over. You Lose.");
  } else {
    console.log("You Win.");
  }
}
