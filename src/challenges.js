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
  let array = `${lastItem}, ${firstItem}`;
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
function highestNumber(array) {
  let highest = array[0];
  for (let index = 0; index < array.length; index += 1) {
    const num = array[index];
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
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  divisible3 = 
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
