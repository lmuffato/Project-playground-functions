// Desafio 1
function compareTrue(boolOne, boolTwo) {
  // seu código aqui
  if (boolOne && boolTwo === true) {
    return true;
  } return false;
} console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let result = 0;
  result = (base * height) / 2;
  return console.log(result);
} calcArea(51, 1);

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let stringToSplit = '';
  stringToSplit = string.split(' ');
  return console.log(stringToSplit);
} splitSentence('foguete');

// Desafio 4
function concatName(name) {
  // seu código aqui
  return console.log(name[name.length - 1], name[0]);
} concatName(['captain', 'my', 'captain']);

// Desafio 5
function footballPoints() {
  // seu código aqui
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
