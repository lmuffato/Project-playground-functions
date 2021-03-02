// Desafio 1
function compareTrue(bool01, bool02) {
  if (bool01 === true && bool02 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string01) {
  let sentenceArray = [];
  sentenceArray = string01.split(' ');
  return sentenceArray;
}

// Desafio 4
function concatName(arrayString) {
  let arrayResult = `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`;
  return arrayResult.toString();
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(arrayNumbers) {
  let countNumber = 0;
  let hightestNumber = arrayNumbers.reduce(function(a, b) {
    return Math.max(a, b);
  });

  for (index in arrayNumbers) {
    if (arrayNumbers[index] === hightestNumber) {
      countNumber += 1;
    }
  }

  return countNumber;
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
