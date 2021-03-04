// Desafio 1
function compareTrue(number1, number2) {
  // seu código aqui
  return number1 && number2;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let i;
  let j = 0;
  let array = [string[0]];

  for (i = 1; i < string.length; i += 1){
    if (string[i] != ' '){
      array[j] += string[i];
    }
    else {
      j += 1;
      i += 1;
      array[j] = string[i];
    }
  }
  return array;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  return (array[array.length -1] + ', ' + array[0]);
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
