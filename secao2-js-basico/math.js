let n1,
  n2,
  arrayNumeros,
  maiorNumero,
  menorNumero,
  numeroAleatorio,
  raizQuadrada;
n1 = 9.54578;
n2 = Math.floor(n1); // arredonda para baixo
n2 = Math.ceil(n1); // arredonda para cima
n2 = Math.round(n1); //arredonda automaticamente para o mais proximo
arrayNumeros = [1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6];
maiorNumero = Math.max(arrayNumeros);
menorNumero = Math.min(arrayNumeros);
numeroAleatorio = Math.random();
numeroAleatorio = Math.round(numeroAleatorio * (10 - 5) + 5); //numero aleatorio entre 10 e 5
raizQuadrada = Math.sqrt(n1, 2);

console.log(raizQuadrada);
