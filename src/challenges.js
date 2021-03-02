// Desafio 1
function compareTrue(value1, value2) {
  if (value1 == true && value2 == true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(blackHole) {
  return blackHole.split(' ');
}

// Desafio 4
function concatName(info) {
  return `${info[info.length - 1]}, ${info[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numbers) {

  let highNumber = 0;
  let count = 0;

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > highNumber) {
      highNumber = numbers[index];
    }
  }

  for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] == highNumber) {
      count += 1;
    }
  }
  return count;
}
let numbers = [9, 1, 2, 3, 9, 5, 7];
console.log(highestCount(numbers));

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
