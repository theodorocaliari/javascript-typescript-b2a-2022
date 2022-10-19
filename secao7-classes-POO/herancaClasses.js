//heranca só de cima para baixo os pais não herdam nada dos herdeiros
//
class DispositivoEletronico {
  constructor(nome, serie) {
    this.nome = nome;
    this.ligado = false;
  }
  ligar() {
    if (this.ligado) {
      console.log(`${this.nome} já está ligado`);
      return;
    }
    this.ligado = true;
  }
  desligar() {
    if (!this.ligado) {
      console.log(`${this.nome} já está desligado`);
      return;
    }
    this.ligado = false;
  }
}

//extends herda
//a herança vai tornando a classe mais especifica
class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome); //chama o construtor da classe pai
    this.cor = cor;
    this.modelo = modelo;
  }
}

const d1 = new DispositivoEletronico("Smartphone");
d1.ligar();
d1.ligar();
d1.desligar();
d1.desligar();
console.log(d1);
