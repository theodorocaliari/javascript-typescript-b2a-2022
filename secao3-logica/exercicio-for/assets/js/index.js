function init() {
  const elementos = [
    { tag: "p", texto: "Frase 1" },
    { tag: "div", texto: "Frase 2" },
    { tag: "footer", texto: "Frase 3" },
    { tag: "section", texto: "Frase 4" },
  ];

  const htmlOutput = document.querySelector(".feedback");

  for (let i = 0; i < elementos.length; i++) {
    //console.log(elementos[i]);

    let { tag, texto } = elementos[i];

    elemento = document.createElement(tag);
    elemento.innerHTML = texto;

    htmlOutput.appendChild(elemento);
    htmlOutput.append(elemento);
  }
}

init();
