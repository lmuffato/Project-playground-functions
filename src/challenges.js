// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2 === true) {
    return true;
  {
  return false;
  }
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
