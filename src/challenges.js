// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === value2 && value1 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(value1, value2) {
  return (value1 * value2) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let word = sentence.split(' ');
  return word;
}

// Desafio 4
function concatName(array) {
  let sentence = '';
  sentence += array[array.length - 1];
  sentence += ', ';
  sentence += array[0];
  return sentence;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(array) {
  let highestNumber = array[0];
  let counter = 0;
  for (let index in array) {
    if (array[index] > highestNumber) {
      highestNumber = array[index];
    }
  }

  for (let index in array) {
    if (array[index] === highestNumber) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  
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
