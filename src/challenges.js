/* eslint-disable max-len */
// Desafio 1
function compareTrue(bool1, bool2) {
  let comparison = false;
  if (bool1 === true && bool2 === true) {
    comparison = true;
  } else {
    comparison = false;
  }
  return console.log(comparison);
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(arrayToConcat) {
  let concatened = (`${arrayToConcat[arrayToConcat.length - 1].toString()}, ${arrayToConcat[0].toString()}`);
  return concatened;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1);
  return points;
}

// Desafio 6
function highestCount(numbersArray) {
  // seu código aqui
  let repeatMax = 0;
  let highestNumber = Math.max(...numbersArray);
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (highestNumber === numbersArray[index]) {
      repeatMax += 1;
    }
  }
  return repeatMax;
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
