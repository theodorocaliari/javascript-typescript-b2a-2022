import soma from "./export";
import * as moduloInteiro from "./export";
import { nome } from "./export";
import { sobrenome as alias } from "./export";
import { nome as alias2, sobrenome as alias3, idade } from "./export";
import soma2, * as outroModulo from "./export";

console.log(alias2, soma, moduloInteiro, nome, alias, alias3, idade);
console.log(soma2, outroModulo);
