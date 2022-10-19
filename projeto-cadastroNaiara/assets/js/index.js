//ajax
const request = (obj) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send(null);
    xhr.addEventListener("load", (e) => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject({
          code: xhr.status,
          msg: xhr.statusText,
        });
      }
    });
  });
};

//identifica clique na pagina
document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === "a") {
    const href = el.getAttribute("href");
    const viewName = href.split(".html").join("");
    if (viewName === "cadastro") {
      e.preventDefault();
      //funcao que trata o elemento
      carregaFormCadastro(el);
    }
  }
});

async function carregaFormCadastro(param) {
  const href = param.getAttribute("href");
  const requestObj = {
    method: "GET",
    url: href,
  };

  try {
    const response = await request(requestObj);
    carregaResultado(response);
  } catch (e) {
    console.log(e);
  }
}

function carregaResultado(param) {
  const divResultado = document.querySelector(".partialComponent");
  divResultado.innerHTML = param;
}
