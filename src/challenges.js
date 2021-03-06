// Desafio 1
function compareTrue(option1, option2) {
  if (option1 === true && option2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arrayString) {
  let string = `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`;
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let vict = wins * 3;
  let empt = ties * 1;
  return vict + empt;
}

// Desafio 6
function highestCount(maxArray) {
  let numMax = Math.max.apply(Math, maxArray);
  let numRep = 0;
  for (let index = 0; index < maxArray.length; index += 1) {
    Math.max.apply(Math, maxArray);
    return numMax;
  }
  for (let index = 0; index < maxArray.length; index += 1) {
    if (numMax == maxArray[index]) {
      numRep++
    }
    return numRep;
  }
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
