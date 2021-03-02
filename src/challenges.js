// Desafio 1
function compareTrue(argBool1, argBool2) {
  return !!(argBool1 && argBool2);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(arrayString) {
  return `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let higherNumber = arrayNumbers[0];
  let higherNumberCount = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    higherNumber = arrayNumbers[index] > higherNumber ? arrayNumbers[index] : higherNumber;
  }
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    higherNumberCount += arrayNumbers[index] === higherNumber;
  }
  return higherNumberCount;
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

console.log(highestCount([0, 0, 0]));
