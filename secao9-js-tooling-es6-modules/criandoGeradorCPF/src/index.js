import GeraCPF from "./modules/geraCPF";
import "../public/assets/css/style.css";

//funcao auto inicia
(function () {
  const gera = new GeraCPF();
  const cpfGerado = document.querySelector(".cpf-gerado");
  cpfGerado.innerHTML = gera.geraNovoCpf();
})();
