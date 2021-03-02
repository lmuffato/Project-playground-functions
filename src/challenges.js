// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
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
function splitSentence(word) {
  let result = word.split(' ');
  return result;
}

// Desafio 4
function concatName(array) {
  let lastWord = array[(array.length - 1)];
  let firstWord = array[0];
  let result = `${lastWord}, ${firstWord}`;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let result = wins * 3 + ties * 1;
  return result;
}

function highestValue(array) {
  let higher = array[0];
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > higher) {
      higher = array[index];
    }
  }
  return higher;
}

function countNumber(array, number) {
  let count = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === number) {
      count += 1;
    }
  }
  return count;
}

// Desafio 6
function highestCount(numbers) {
  let higher = highestValue(numbers);
  let result = countNumber(numbers, higher);
  return result;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))

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
