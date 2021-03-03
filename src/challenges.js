// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let arrayString = [];
  arrayString = string.split('');
  return arrayString;
}

// Desafio 4

function concatName(arrayString) {
  let lastItem = arrayString[arrayString.length - 1];
  let firstItem = arrayString[0];
  let array = lastItem + ', ' + firstItem;
  return array;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsScore = wins * 3;
  let tiesScore = ties * 1;
  let score = winsScore + tiesScore;
  return score;
}

// Desafio 6
function highestNumber(arr) {
  let highest = arr[0];
  /* for (let num of arr) if (num >= highest) highest = num; */
  for (let index = 0; index < arr.length; index += 1) {
    const num = arr[index];
    if (num >= highest) highest = num;
  }
  return highest;
}
function highestCount(arrayNumbers) {
  let countOutput = 0;
  let highest = highestNumber(arrayNumbers);
  for (let index = 0; index < arrayNumbers.length; index += 1) {

    let countInput = arrayNumbers[index];
    if (countInput === highest) countOutput += 1;
  }

  return countOutput;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  
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
