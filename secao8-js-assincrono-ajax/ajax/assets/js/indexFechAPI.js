document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault();
    carregaPagina(el);
  }
});

/*
Promises
***

function carregaPagina(el) {
  const href = el.getAttribute("href");

  fetch(href)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.text();
      } else {
        throw new Error();
      }
    })
    .then((html) => carregaResultado(html))
    .catch((e) => console.log(e));
}*/

async function carregaPagina(el) {
  try {
    const href = el.getAttribute("href");
    const response = await fetch(href);

    if (response.status >= 200 && response.status < 300) {
      const html = await response.text();
      carregaResultado(html);
    }
  } catch (e) {
    console.log(e);
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = response;
}

/*
//fetch API
fetch("pagina4.html")
  .then((resposta) => {
    if (resposta.status !== 200) throw new Error("Erro 404 Nosso");
    return resposta.text();
  })
  .then((html) => console.log(html))
  .catch((e) => console.error(e));
*/
