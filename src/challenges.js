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
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

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
