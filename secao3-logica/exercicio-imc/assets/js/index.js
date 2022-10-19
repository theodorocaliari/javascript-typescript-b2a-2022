const form = document.querySelector("form");

function calculaIMC(peso, altura) {
  const resultado = peso / (altura * altura);
  return resultado;
}

function feedbackImc(imc) {
  let textoFeedback = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesid.ade grau 3",
  ];
  const resultadoIMC = imc;

  if (imc >= 39.9) {
    return textoFeedback[5];
  }
  if (imc >= 34.9) {
    return textoFeedback[4];
  }
  if (imc >= 29.9) {
    return textoFeedback[3];
  }
  if (imc >= 24.9) {
    return textoFeedback[2];
  }
  if (imc >= 18.5) {
    return textoFeedback[1];
  }
  if (imc < 18.5) {
    return textoFeedback[0];
  }
}

function criaParagrafo() {
  const p = document.createElement("p");
  return p;
}

function setResultado(msg, isValid) {
  const feedback = document.querySelector(".feedback");
  const p = criaParagrafo();

  console.log(feedback);

  if (!isValid) {
    p.classList.add("feedback-bg-vermelho");
    //return `Seu IMC é ${Math.round(imc).toFixed(2)} (${textoFeedback})`;
  } else {
    p.classList.add("feedback-bg-verde");
  }

  p.innerHTML = msg;
  feedback.appendChild(p);
}

function appImc(e) {
  e.preventDefault();

  //e.target é o mesmo que form.
  let inputPeso = e.target.querySelector("#peso");
  let inputAltura = e.target.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  let msg;

  if (peso || altura) {
    const resultadoIMC = calculaIMC(peso, altura);
    msg = `Seu IMC é ${Math.round(resultadoIMC).toFixed(2)} (${feedbackImc(
      resultadoIMC
    )})`;
    //console.log(msg);
    setResultado(msg, true);
  } else {
    if (!peso && !altura) {
      msg = `Impossível calcular. Verifique os valores digitados.`;
    } else if (!altura) {
      msg = `Altura Inválida`;
    } else {
      msg = `Peso Inválido`;
    }

    setResultado(msg, false);
  }
}

form.addEventListener("submit", appImc);
