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
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
