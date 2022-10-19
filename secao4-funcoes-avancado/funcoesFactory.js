//funcoes fabrica sao funcoes que retornam um objeto
function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,
    altura: a,
    peso: p,

    //setter
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
    },

    //getter usado para só obter o valor
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },

    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
  };
}
const p1 = criaPessoa("Theodoro", "Caliari", 1.8, 80);
console.log(p1.imc());
