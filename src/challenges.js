// Desafio 1
function compareTrue(valueOne, valueTwo) {
  let comparedValue = true;

  if (valueOne === true && valueTwo === true) {
    comparedValue = true;
  } else {
    comparedValue = false;
  }

  return comparedValue;
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(stringValue) {
  let stringArray = stringValue.split(' ');
  return stringArray;
}

// Desafio 4
function concatName(arrayOfStrings) {
  resultConcat = arrayOfStrings[arrayOfStrings.length -1] + ', ' + arrayOfStrings[0];
  return resultConcat;
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
