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
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(strings) {
  let firstItem = strings[0];
  let lastItem = strings[strings.length - 1];
  let concatString = `${lastItem}, ${firstItem}`;
  return concatString;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(values) {
  let biggest = 0;
  let counter = 0;
  for (let value in values) {
    if (values[value] > biggest) {
      biggest = values[value];
    }
  }
  for (let value in values) {
    if (values[value] === biggest) {
      counter += 1;
    }
  }

  return counter;
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
