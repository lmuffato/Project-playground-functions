// Desafio 1
function compareTrue(value1, value2) {
  if ((value1 === true) && (value2 === true)) {
    return true;
  }
  return false;
}

console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}

console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(frase) {
  let resultado = frase.split(' ');
  return resultado;
}

console.log(splitSentence('vamo que vamo'));

// Desafio 4
function concatName(trocaPalavra) {
  let auxiliar = `${trocaPalavra[trocaPalavra.length - 1]}, ${trocaPalavra[0]}`;
  return auxiliar;
}

console.log(concatName(['foguete', 'não', 'tem', 'ré']));

// Desafio 5
function footballPoints(win, ties) {
  return (3 * win) + ties;
}

console.log(footballPoints(1, 2));

// Desafio 6
function encontraMaiorValorRepetido(valoresRecebidos) {
  let maiorValor = 0;
  for (let index = 0; index < valoresRecebidos.length; index += 1) {
    if (maiorValor < valoresRecebidos[index]) {
      maiorValor = valoresRecebidos[index];
    }
  }
  return maiorValor;
}

function highestCount(valoresRecebidos) {
  let count = 0;
  let maiorValor = encontraMaiorValorRepetido(valoresRecebidos);
  for (let index2 = 0; index2 < valoresRecebidos.length; index2 += 1) {
    if (maiorValor === valoresRecebidos[index2]) {
      count += 1;
    }
  }
  return count;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

console.log(catAndMouse());

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
