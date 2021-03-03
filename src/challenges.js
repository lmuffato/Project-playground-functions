// Desafio 1
function compareTrue(number1, number2) {
  if (number1 === true && number2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(nameSplit) {
  let resultSplit = nameSplit.split(' ');
  return resultSplit;
}

// Desafio 4
function concatName(name) {
  let firtArray = name[0];
  let ultimateArrayNumber = name.length - 1;
  let ultimateArray = name[ultimateArrayNumber]
  let resultArray = ultimateArray + ' ' + firtArray;
  return resultArray; 
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
console.log(compareTrue(false, true));
console.log(compareTrue(true, true));

console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

console.log(splitSentence('go trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

console.log(concatName(name=['Lucas', 'Cassio', 'Ferraz', 'Paolillo']));
console.log(concatName(name=['foguete', 'não', 'tem', 'ré']));
console.log(concatName(name=['captain', 'my', 'captain']));

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
