import "core-js/stable";
import "regenerator-runtime/runtime";

import Login from "./modules/Login";
import FormContato from "./modules/FormContato";

//import "./assets/css/style.css";

const login = new Login(".form-login");
const cadastro = new Login(".form-cadastro");
const cadastrarContato = new FormContato(".cadastrar-contato");
const editarContato = new FormContato(".editar-contato");

login.init();
cadastro.init();
cadastrarContato.init();
editarContato.init();
