const randomRange = (min, max) => Math.random() * (max - min) + min;
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
const operadores = randomRange(1, 4);
const n1 = Math.round(randomRange(1, 10));
const n2 = Math.round(randomRange(1, 10));

function getStringEquacao(operacao, n1, n2) {
  return objOperacoes[operacao].equacaoString(n1, n2);
}

function getRightAnswer(operacao, respostaUsuario) {
  return objOperacoes[operacao].answerCheck(respostaUsuario); //true / false
}

function getOperacao(int) {
  if (int <= 4 && int > 0) {
    switch (Math.round(int)) {
      case 1:
        return "adicao";
      case 2:
        return "subtracao";
      case 3:
        return "multiplicacao";
      case 4:
        return "divisao";
    }
  }
  return 0;
}

function setRespostaUsuario(int) {
  const answer = Number(int);
  if (typeof answer === "number") {
    return answer;
  } else {
    return 0;
  }
}

function setNumberOfQuestions(int) {
  const numberOfQuestions = Number(int);
  if (typeof numberOfQuestions === "number") {
    if (numberOfQuestions <= 30) {
      return numberOfQuestions;
    } else {
      return 2; //mais que 30
    }
  }
  return 0; //nao eh numero
}

function game(numeroQuestoes, usuarioResposta) {
  let continuar, contador, respostaCorreta, respostaUsuario;
  respostaUsuario = Number(usuarioResposta);

  continuar = true;
  contador = 0;
  respostaCorreta = true;

  while (continuar && contador < numeroQuestoes) {
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

function buildUiFront(div) {
  const equationArea = document.createElement("div");
  const answerArea = document.createElement("div");
  const inputRespostaUsuario = document.createElement("input");

  equationArea.setAttribute("class", "math-area");
  answerArea.setAttribute("class", "answer-area");
  inputRespostaUsuario.setAttribute("type", "text");
  inputRespostaUsuario.setAttribute("value", "");
  inputRespostaUsuario.setAttribute("placeholder", "Resposta");

  answerArea.remove();

  div.append(equationArea);
  div.append(answerArea);
  answerArea.append(inputRespostaUsuario);

  //const respostaInputValue = e.target.value;
  //const respostaUsuario = setRespostaUsuario(respostaInputValue);
  //const respostaCerta = getRightAnswer(operacao, respostaUsuario);
}

function init() {
  const mainDiv = document.querySelector(".container");
  const gameArea = document.createElement("div");
  gameArea.setAttribute("class", "game-area");

  const inputNumeroQuestoes = document.createElement("input");
  inputNumeroQuestoes.setAttribute("type", "text");
  inputNumeroQuestoes.setAttribute("placeholder", "Número de Questões");

  mainDiv.append(gameArea);

  buildUiFront(gameArea);

  gameArea.addEventListener("keypress", (e) => {
    const el = e;
    console.log(el);
    if (e.key == "Enter") {
      buildUiFront(gameArea);
    }
  });

  let continuar, count, quantidadeQuestoes;
  count = 0;
  quantidadeQuestoes = 0;
  continuar = true;
  let operacao = getOperacao(operadores);

  //equationArea.innerHTML = getStringEquacao(operacao, n1, n2);

  inputNumeroQuestoes.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
      quantidadeQuestoes = e.target.value;
      inputNumeroQuestoes.remove();
    }
  });

  // inputRespostaUsuario.addEventListener("keypress", (e) => {
  //   if (e.key == "Enter") {
  //     const respostaInputValue = e.target.value;

  //     const respostaUsuario = setRespostaUsuario(respostaInputValue);
  //     const respostaCerta = getRightAnswer(operacao, respostaUsuario);

  //     console.log(respostaCerta);
  //     e.target.value = "";
  //     equationArea.innerHTML = getStringEquacao(operacao, n1, n2);
  //   }
  // });

  // gameArea.addEventListener("keypress", (e) => {
  //   const el = e;
  //   operacao = getOperacao(operadores);
  //   equationArea.innerHTML = getStringEquacao(operacao, n1, n2);
  //   if (e.key == "Enter") {
  //

  //     console.log(respostaCerta);
  //   }
  // });
}

init();
