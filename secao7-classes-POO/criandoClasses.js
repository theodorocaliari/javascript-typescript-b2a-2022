//classe em js é o mesmo que funcao construtora, só o modo de escrever que é diferente
//na funcao construtora temos que usar o prototype para declarar os metodos e otimizar o uso dos recursos computacionais
//com a classe os metodos declarados ja são adicionados ao prototype do objeto pai
class Pessoa {
  //classe
  //metodo especial para passar parametros
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} esta falando`);
  }
  comer() {
    console.log(`${this.nome} esta comendo`);
  }
  beber() {
    console.log(`${this.nome} esta bebendo`);
  }
}

const p1 = new Pessoa("Luiz", "Miranda");
console.log(p1.nome);
