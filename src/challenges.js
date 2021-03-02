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
  let word = '';
  let words = [];
  for (let index = 0; index < phrase.length; index += 1) {
    if (phrase[index] !== ' ') {
      word += phrase[index];
    }

    if (index === (phrase.length - 1) || phrase[index] === ' ') {
      words.push(word);
      word = '';
    }
  }
  return words;
}

// Desafio 4
function concatName(arr) {
  let firstName = arr[0];
  let lastName = arr[arr.length - 1];
  let names = lastName + ', ' + firstName;
  return names;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
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
