// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === false && value2 === false) {
    value1 = true;
    return value1 === value2;
  }
  return value1 === value2;
}

// Desafio 2
function calcArea(base, height) {
  let triangleArea = (base * height) / 2;

  return triangleArea;
}

// Desafio 3
function splitSentence(string) {
  let result = string.split(' ');

  return result;
}

// Desafio 4
function concatName(string) {
  return `${string[string.length - 1]}, ${string[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = 3;
  let tiesPoints = 1;
  return (winsPoints * wins) + (tiesPoints * ties);
}
let array = [0, 0, 0];
function runArray(list) {
  list = [];
  for (let index = 0; index < array.length - 1; index += 1) {
    if (array[index] > array[index + 1]) {
      list.push(array[index]);
    }
  }
  return list;
}

// Desafio 6
function highestCount(list) {
  let biggestNumber = 0;
  let timesRepeat = 0;
  let arrayCresentOrder = [];
  arrayCresentOrder = runArray(list);
  biggestNumber += arrayCresentOrder[0];
  for (let index = 0; index < array.length; index += 1) {
    if (biggestNumber === array[index]) {
      timesRepeat += 1;
    }
  }
  return timesRepeat;
}
console.log(highestCount(array));
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
