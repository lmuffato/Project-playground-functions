// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let words = [];
  let word = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === ' ') {
      words.push(word);
      word = '';
    } else if (index === (string.length - 1)) {
      word += string[index];
      words.push(word);
      word = '';
    } else {
      word += string[index];
    }
  }
  return words;
}

// Desafio 4
function concatName(string) {
  let first = string[string.length - 1];
  let last = string[0];
  return `${first}, ${last}`;
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
