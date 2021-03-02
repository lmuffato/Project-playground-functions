// Desafio 1
function compareTrue(bool1, bool2) {
  // seu código aqui
  if (bool1 === true && bool2 === true) {
    return true;
  } else {
    return false;
  }
}

console.log(compareTrue(true, true));
console.log(compareTrue(true, false));
console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let result = (base * height) / 2;
  return result;
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(separatee, limiter) {
  // seu código aqui
  let result = separatee.split(limiter);
  return result;
}

console.log(splitSentence('go Trybe', ' '));
console.log(splitSentence('vamo que vamo', ' '));
console.log(splitSentence('foguete', ' '));

// Desafio 4
function concatName(names) {
  // seu código aqui
  return names[names.length - 1] + " " + names[0];
}
console.log(concatName(["Lucas", "Cassiano", "Ferraz", "Paolilo"]));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

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
