// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3

function splitSentence(phrase) {
  let phraseArray = [];
  let word = '';
  for (let index = 0; index <= phrase.length; index += 1) {
    if (phrase[index] !== ' ') {
      word += phrase[index];
    }
    if (phrase[index] === ' ' || index === phrase.length - 1) {
      phraseArray.push(word);
      word = '';
    }
  }
  return phraseArray;
}

// Desafio 4
function concatName(array) {
  let space = ', ';
  return array[array.length - 1] + space + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 3 * wins + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  for (let higherIndex = 1; higherIndex < array.length; higherIndex += 1) {
    for (let lowerIndex = 0; lowerIndex < higherIndex; lowerIndex += 1) {
      if (array[higherIndex] > array[lowerIndex]) {
        let position = array[lowerIndex];
        array[lowerIndex] = array[higherIndex];
        array[higherIndex] = position;
      }
    }
  }
  let counter = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[0] === array[index]) {
      counter += 1;
    }
  }
  return counter;
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
