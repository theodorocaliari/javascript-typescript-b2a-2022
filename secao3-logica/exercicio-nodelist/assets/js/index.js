function init() {
  const body = document.body;
  const container = document.querySelector(".container");
  const paragrafos = container.querySelectorAll("p");

  const bodyStyles = getComputedStyle(body);
  const bgColor = bodyStyles.backgroundColor;

  for (let paragrafo of paragrafos) {
    paragrafo.style.backgroundColor = bgColor;
    paragrafo.style.color = "#ffffff";
    //console.log(paragrafo);
  }
}

init();
