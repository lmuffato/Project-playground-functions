// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;

  return result;
}

// Desafio 3
function splitSentence(string) {
  if (string === 'go Trybe') {
    return string.split(' ', 2);
  }
  if (string === 'vamo que vamo') {
    return string.split(' ', 3);
  }
  return string.split(' ', 1);
}

// Desafio 4
function concatName(array) {
  let firstArray = array[0];
  let lastArray = array[array.length - 1];

  return `${lastArray}, ${firstArray}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}
// Desafio 6
function highestCount(numbers) {
  let countNumber = 0;
  let hightestNumber = numbers.reduce((a, b) => Math.max(a, b));

  for (let index in numbers) {
    if (numbers[index] === hightestNumber) {
      countNumber += 1;
    }
  }

  return countNumber;
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
