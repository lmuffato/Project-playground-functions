// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(stringToArray) {
  return stringToArray.split(' ');
}

// Desafio 4
function concatName(arrayOfStrings) {
  return `${arrayOfStrings[arrayOfStrings.length - 1]}, ${arrayOfStrings[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  wins *= 3;
  let points = wins + ties;
  return points;
}

// Desafio 6
function higherNumber(arrayOfNumber) {
  let highest = arrayOfNumber[0];
  for (let index = 0; index < arrayOfNumber.length; index += 1) {
    if (arrayOfNumber[index] > highest) {
      highest = arrayOfNumber[index];
    }
  }
  return highest;
}

function highestCount(arrayOfNumber) {
  let highest = higherNumber(arrayOfNumber);
  let higherRepeated = 0;
  for (let indexRepeated = 0; indexRepeated < arrayOfNumber.length; indexRepeated += 1) {
    if (arrayOfNumber[indexRepeated] === highest) {
      higherRepeated =+ 1
    }
  }
 
return higherRepeated;
}
let arrayOfNumber = [1, 3 ,6 ,7 ,7 ,5 ,2]
console.log(highestCount(arrayOfNumber))
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
