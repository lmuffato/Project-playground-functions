// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2 === true) {
    return true;
  }
    return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  let result = phrase.split(' ');

  return result;
}

// Desafio 4
function concatName(names) {
  let firstLastNames = names[0].concat (' ' + names[names.length - 1]);
  return firstLastNames;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsWins = wins * 3;
  let sumPoints = pointsWins + ties;
  return sumPoints;
}

// Desafio 6
function highestCount(array) {
  let numberLarger = 0;
  let counter = 0;
  let amountNumberLarger = 0
  for (let index = 1; index < array.length; index += 1) {
    if (array[counter] > array[index]) {
      numberLarger = array[counter];
    } else {
      numberLarger = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (numberLarger === array[index]){
      amountNumberLarger += 1;
    }
  }
  return amountNumberLarger;
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
