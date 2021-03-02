// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(stringValue) {
  return stringValue.split(' ');
}

// Desafio 4
function concatName(arrayNames) {
  let newString = '';

  for (let index = arrayNames.length; index >= 0; index -= 1) {
    if (index === arrayNames.length - 1) {
      newString = newString.concat(arrayNames[index], ', ');
    }

    if (index === 0) {
      newString = newString.concat(arrayNames[index]);
    }
  }

  return newString;
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

console.log(compareTrue(true, true));

console.log(calcArea(10, 50));

console.log(splitSentence('go Trybe'));

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

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
