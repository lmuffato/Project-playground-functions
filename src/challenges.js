// Desafio 1

function compareTrue(n1, n2) {
  if (n1 === true && n2 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
// usado material base para entendimento da solução https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(arrayselect) {
  let resultarray = arrayselect[arrayselect.length - 1] + ", " + arrayselect[0];
  return resultarray;
}

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
