const request = (obj) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest(); //ajax
    //method, url, sincrono ou assincrono - true para assincrono
    xhr.open(obj.method, obj.url, true);
    //send - envia os dados do post
    xhr.send(null);
    xhr.addEventListener("load", (e) => {
      //recebido a resposta
      //codigo http - https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject({
          code: xhr.status, //codigo erro
          msg: xhr.statusText, //mensagem do status
        });
      }
    });
  });
};

document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault();
    carregaPagina(el);
  }
});

/*function carregaPagina(el) {
  const href = el.getAttribute("href");

  const objConfig = {
    url: href,
    method: "GET",
  };

  request(objConfig)
    .then((response) => carregaResultado(response))
    .catch((error) => console.log(error));
}*/

async function carregaPagina(el) {
  const href = el.getAttribute("href");

  const objConfig = {
    url: href,
    method: "GET",
  };

  try {
    const response = await request(objConfig);
    carregaResultado(response);
  } catch (e) {
    console.log(e);
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = response;
}
