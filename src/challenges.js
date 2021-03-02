// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } if (value1 === false || value2 === false) {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let arrayOfStrings = string.split(' ');
  return arrayOfStrings;
}

// Desafio 4
function concatName(array) {
  return (array[array.length - 1] + ', ' + array[0]);
}

function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let indexValueMaior = 0;
  let count = 0;
  for (let index in array) {
    if(array[indexValueMaior] < array[index]) {
      indexValueMaior = index;
      for (let index in array) {
        if (array[indexValueMaior] === array[index]) {
          count += 1
        }
      }
    }
  }
  return count
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
