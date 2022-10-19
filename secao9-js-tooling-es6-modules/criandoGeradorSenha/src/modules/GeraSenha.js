export default class GeraSenha {
  constructor(passLength = 10, haveNumbers = true, haveLowercase = true, haveUppercase = false, haveSymbols = false) {
    this.passLength = Number(passLength);
    this.haveNumbers = haveNumbers;
    this.haveLowercase = haveLowercase;
    this.haveUppercase = haveUppercase;
    this.haveSymbols = haveSymbols;
  }

  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  gerasenha() {
    //num 48 to 57
    //alphaupper 65 to 90
    //alphalower 97 to 122
    //baseando no range da tabela ASCII foi gerado um numero randomico nesse range
    const digits = () => String.fromCharCode(this.randomNumber(48, 58));
    const lowercase = () => String.fromCharCode(this.randomNumber(97, 123));
    const uppercase = () => String.fromCharCode(this.randomNumber(65, 91));
    const symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"; //simbolos inseridos manualmente
    const getSymbol = () => symbols[this.randomNumber(0, symbols.length)];

    const passArray = [];

    for (let i = 0; i < this.passLength; i++) {
      this.haveNumbers && passArray.push(digits());
      this.haveLowercase && passArray.push(lowercase());
      this.haveUppercase && passArray.push(uppercase());
      this.haveSymbols && passArray.push(getSymbol());
    }

    return passArray.join("").slice(0, this.passLength);
  }
}
