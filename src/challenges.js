// Desafio 1
function compareTrue(x, y) {
  if (typeof x == 'boolean' && typeof y == 'boolean') {
    return x && y;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, heigth) {
  return base * heigth / 2
}

// Desafio 3
function splitSentence(phrase) {
  let words = []
  let path = 0
  for (index = 0; index < phrase.length; index++) {
    if (phrase[index] != " ") {
      if (words[path] != undefined) {
        words[path] = words[path] + phrase[index];
      } else {
        words[path] = phrase[index];
      }
    } else {
      path++;
    }
  }
  return words
}

// Desafio 4
function concatName(names) {
  let lastName = names[names.length - 1];
  let firstName = names[0];
  return lastName + ", " + firstName
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsWins = wins * 3;
  let pointsTies = ties * 1;
  let totalPoints = pointsWins + pointsTies;
  return totalPoints
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
