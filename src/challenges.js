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
function concatName(arrayOfStrings) {
  let firstValue = arrayOfStrings.slice(0, 1);
  let lastValue = arrayOfStrings.slice(arrayOfStrings.length - 1);
  let concatedValues = '';
  return concatedValues.concat(lastValue, ', ', firstValue).toString();
}

// Desafio 5
function footballPoints(wins, ties) {
  let sum = (wins * 3) + (ties * 1);
  return sum;
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
