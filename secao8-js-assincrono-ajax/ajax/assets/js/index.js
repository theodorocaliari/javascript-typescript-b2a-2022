const request = (obj) => {
  const xhr = new XMLHttpRequest(); //ajax
  //method, url, sincrono ou assincrono - true para sincrono
  xhr.open(obj.method, obj.url, true);
  //send - envia os dados do post
  xhr.send(null);
  xhr.addEventListener("load", (e) => {
    //recebido a resposta
    if (xhr.status >= 200 && xhr.status < 300) {
      //funcao callback de sucesso
      obj.success(xhr.responseText);
    } else {
      //funcao callback de erro
      obj.error({
        code: xhr.status, //codigo erro
        msg: xhr.statusText, //mensagem do status
      });
    }
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

function carregaPagina(el) {
  const href = el.getAttribute("href");

  const objConfig = {
    url: href,
    method: "GET",
    success(response) {
      carregaResultado(response);
    },
    error(errorText) {
      console.log(errorText);
    },
  };

  request(objConfig);
}

function carregaResultado(response) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = response;
}
