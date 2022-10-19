const cpfUsuario = "032.901.879-50";

function cpfSemDigitoVerificador(cpfUsuario) {
  const cpf = cpfUsuario;
  const cpfSemMascara = cpf.replace(/\D+/g, ""); //expressao regular que identifica não numeros na string e substitui por vazio
  const cpfEmArray = Array.from(cpfSemMascara);
  const excluiDigitoVerificadorCpfUsuario = cpfEmArray.map(
    (valor, index, array) => {
      if (index <= 8) {
        return valor;
      }
      return null;
    }
  );

  //console.log(excluiDigitoVerificadorCpfUsuario);
  const cpfSemDigitoVerificador = excluiDigitoVerificadorCpfUsuario.filter(
    (value, index, array) => {
      if (value !== null) {
        return value;
      }
    }
  );

  return cpfSemDigitoVerificador;
}

function somaValoresCpf(
  cpfSemDigitoVerificadorArray,
  digitoVerificador = null
) {
  const arrayPrimeiroDigito = [10, 9, 8, 7, 6, 5, 4, 3, 2];
  const arraySegundoDigito = [11, ...arrayPrimeiroDigito];

  if (digitoVerificador === null) {
    const somaAlgarismos = cpfSemDigitoVerificadorArray.reduce(
      (acumulador, valor, index) => {
        valor = Number(valor);
        valor = valor * arrayPrimeiroDigito[index];
        return (acumulador += valor);
      },
      0
    );
    return somaAlgarismos;
  } else {
    cpfSemDigitoVerificadorArray.concat(digitoVerificador);
    const somaAlgarismos = cpfSemDigitoVerificadorArray.reduce(
      (acumulador, valor, index) => {
        valor = Number(valor);
        valor = valor * arraySegundoDigito[index];
        return (acumulador += valor);
      }
    );
    return somaAlgarismos;
  }
}

function digitoVerificador(somaValoresCpf) {
  //11 - (soma digitos % 11) = primeiro digito validador (não pode ser maior que nove, caso maior que nove recebe 0)

  const formula = 11 - (somaValoresCpf % 11);
  let digito = 0;
  if (formula <= 9) {
    digito = formula;
  }
  return String(digito);
}

function checaCpfValido(cpfUsuario, cpfComDigitosArray) {
  let cpfComDigitos = "";
  const cpfSemMascara = cpfUsuario.replace(/\D+/g, "");
  cpfComDigitosArray.forEach((valor) => {
    cpfComDigitos += valor;
    return cpfComDigitos;
  });
  return cpfComDigitos === cpfSemMascara;
}

const cpfSemDigitoVerificadorArray = cpfSemDigitoVerificador(cpfUsuario);
//console.log(cpfSemDigitoVerificadorArray);
const somaValoresCpf1 = somaValoresCpf(cpfSemDigitoVerificadorArray);

let primeiroNumVerificador = digitoVerificador(somaValoresCpf1);

const somaValoresCpf2 = somaValoresCpf(
  cpfSemDigitoVerificadorArray,
  primeiroNumVerificador
);
let segundoNumVerificador = digitoVerificador(somaValoresCpf2);

const cpfFinal = cpfSemDigitoVerificadorArray.concat(
  primeiroNumVerificador,
  segundoNumVerificador
);

const cpfBool = checaCpfValido(cpfUsuario, cpfFinal);

if (cpfBool) {
  console.log("CPF válido");
} else {
  console.log("CPF inválido");
}
