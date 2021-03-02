// Desafio 1
function compareTrue(num1, num2) {
  if (num1 === true && num2 === true) {
    return true;
  }
  return false;
}

console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

console.log(calcArea(5, 2));

// Desafio 3
function splitSentence(str) {
  let holdWord = '';
  let myArray = [];

  for (let index = 0; index < str.length; index += 1) {
    if (str[index] !== ' ') {
      holdWord += str[index];
    } else {
      myArray.push(holdWord);
      holdWord = '';
    }
  }
  myArray.push(holdWord);
  return myArray;
}
console.log(splitSentence('vamo que vamo'));

// Desafio 4
function concatName(str) {
  let myArray = [];
  let myString = '';

  myArray.push(str[str.length - 1]);
  myArray.push(str[0]);

  myString = myArray[0] + ', ' + myArray[1];
  return myString;
}

console.log(concatName(['foguete', 'não', 'tem', 'ré']));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(array) {
  let larger = 0;
  let count = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > larger) {
      larger = array[index];
    }
  }

  for (let index = 0; index < array.length; index += 1) {
    if (larger === array[index]) {
      count += 1;
    }
  }
  return count;
}

console.log(highestCount([0, 0, 0]));

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
