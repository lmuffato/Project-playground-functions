// Desafio 1
function compareTrue(valueA, valueB) {
  if (valueA === true && valueB === true) {
    return true;
  }

  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(message) {
  return message.split(' ');
}

// Desafio 4
function concatName(arr) {
  return `${arr[arr.length - 1]}, ${arr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  if (wins) {
    points += wins * 3;
  }
  if (ties) {
    points += ties * 1;
  }

  return points;
}

// Desafio 6
function highestCount(numbersArr) {
  let highestNumber = numbersArr[0];

  for (let index = 1; index < numbersArr.length; index += 1) {
    if (numbersArr[index] > highestNumber) {
      highestNumber = numbersArr[index];
    }
  }

  return numbersArr.filter((number) => number === highestNumber).length;
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
