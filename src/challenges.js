// Desafio 1
function compareTrue(conditionOne, conditionTwo) {
  if ((conditionOne === true) && (conditionTwo === true)) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(phrase) {
  let string = [''];
  let counter = 0;
  for (let index = 0; index < phrase.length; index += 1) {
    if (phrase[index] === ' ') {
      counter += 1;
      string[counter] = [''];
    } else {
      string[counter] += phrase[index];
    }
    console.log(phrase[index]);
  }
  console.log(string);
  return string;
}

// Desafio 4
function concatName(string) {
  let phrase = string[(string.length - 1)];
  phrase += ', ';
  phrase += string[0];
  return phrase;
}

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

console.log(concatName(['Guilherme', 'Sucupira', 'OLiveira']));

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
