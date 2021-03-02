/* eslint-disable max-len */
// Desafio 1
function compareTrue(bool1, bool2) {
  let comparison = false;
  if (bool1 === true && bool2 === true) {
    comparison = true;
  } else {
    comparison = false;
  }
  return comparison;
}

// Desafio 2
function calcArea(base, height) {
  let result = ((base * height) / 2);
  return result;
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
function catAndMouse(mouse, cat1, cat2) {
  let cat1Dist = Math.abs(cat1 - mouse);
  let cat2Dist = Math.abs(cat2 - mouse);
  if (cat1Dist < cat2Dist) {
    return 'cat1';
  } if (cat1Dist > cat2Dist) {
      return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
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
