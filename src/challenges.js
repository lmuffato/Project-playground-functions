// Desafio 1
function compareTrue(firstValue, secondValue) {
  let compareValues = firstValue && secondValue === true;

  return compareValues;
}

// Desafio 2
function calcArea(base, height) {
  let triangleCalcArea = (base * height) / 2;

  return triangleCalcArea;
}

// Desafio 3
function splitSentence(stringsToSplit) {
  let splitedStrings = [];

  splitedStrings = stringsToSplit.split(' ');

  return splitedStrings;
}

// Desafio 4
function concatName() {
  // seu código aqui
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
