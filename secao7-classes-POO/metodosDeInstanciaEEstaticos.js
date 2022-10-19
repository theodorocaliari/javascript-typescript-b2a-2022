class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }
  aumentarVolume() {
    this.volume += 2;
  }
  //metodo de instancia
  diminuirVolume() {
    this.volume -= 2;
  }

  //metodo estatico
  //metodo referente a classe
  //metodo estatico não tem acesso aos dados da instancia
  static tempoDeUso() {
    console.log("Tempo de uso foi XXX");
  }
}

const c1 = new ControleRemoto("LG");
c1.aumentarVolume();

//c1.trocaPilha();
ControleRemoto.tempoDeUso();
console.log(c1);
