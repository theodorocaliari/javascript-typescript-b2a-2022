function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  //criando array vazio
  const pessoas = [];

  function recebeEventoForm(evento) {
    evento.preventDefault();
    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    //console.log(nome.value, sobrenome.value, peso.value, altura.value);

    const pessoa = {
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    };

    //adicionando objeto por ultimo no array pessoas
    pessoas.push(pessoa);
    console.log(pessoas);

    //exibindo os valores dos inputs na div de resultados
    resultado.innerHTML += `<p>${nome.value}\t${sobrenome.value}\t${peso.value}\t${altura.value}</p>`;
  }

  form.addEventListener("submit", recebeEventoForm);

  /*
  //verificando evento submit em form
  let contador = 1;
  form.addEventListener("submit", (evento) => {
    //preventDefault desativa o comportamento padrao
    evento.preventDefault();
    console.log(`Form não enviado ${contador}`);
    contador++;
  });
  */
}

meuEscopo();
