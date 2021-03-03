// Desafio 1
function compareTrue(param01, param02) {
  if (param01 && param02 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
// fiz com a aujda do plantão
function splitSentence(value) {
  return value.split(' ');
}

// Desafio 4
function concatName(lastFirst) {
  let result = [];
  result.push(lastFirst[lastFirst.length - 1], lastFirst[0]);
  return result;
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
