// Desafio 1
function compareTrue(value, otherValue) {
  if (value === true && otherValue === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let newArraySplit = sentence.split(' ');
  return newArraySplit;
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount() {

}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  array.forEach((element) => {
    if (element % 3 === 0 && element % 5 === 0) {
      result.push('fizzBuzz');
    } else if (element % 3 === 0) {
      result.push('fizz');
    } else if (element % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push('bug!');
    }
  });
  return result;
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
