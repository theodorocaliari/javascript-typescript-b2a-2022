//retorna um objeto
//funcao construtora sempre inicia nome com letra maiuscula
//construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
  //atributos ou metodos privados
  const ID = 12345;
  const metodoInterno = function () {
    //não é acessivel pela notação ponto
  };

  //com a palavra this são atributos ou metodos publicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = () => {
    console.log(`${this.nome}: sou um método`);
  };
}

//no javascript a palavar NEW cria um novo objeto vazio
const p1 = new Pessoa("Luiz", "Otávio");
const p2 = new Pessoa("Maria", "Oliveira");

console.log(p1.nome);
p1.metodo();
