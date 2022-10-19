let tituloPrincipal = document.getElementById("tituloPrincipal");
let textoConteudo = document.getElementById("textoConteudo");

let numeroUsuario = Number(prompt("Digite um número qualquer:"));

tituloPrincipal.innerHTML = `<h2>O número digitado foi ${numeroUsuario}</h2>`;
textoConteudo.innerHTML = `<p>Raiz quadrada: <strong>${Math.sqrt(
  numeroUsuario
)}</strong></p>`;
textoConteudo.innerHTML += `<p>${numeroUsuario} é inteiro: <strong>${
  Number.isInteger(numeroUsuario) ? "é inteiro" : "não é inteiro"
}</strong></p>`;
textoConteudo.innerHTML += `<p>${numeroUsuario} é NaN: <strong>${
  Number.isNaN(numeroUsuario) ? "sim, não é um número" : "não, é um número"
}</strong></p>`;
textoConteudo.innerHTML += `<p>Arredondando para baixo: <strong>${Math.floor(
  numeroUsuario
)}</strong></p>`;
textoConteudo.innerHTML += `<p>Arredondando para cima: <strong>${Math.ceil(
  numeroUsuario
)}</strong></p>`;
textoConteudo.innerHTML += `<p>Com duas casas decimais: <strong>${numeroUsuario.toFixed(
  2
)}</strong></p>`;
