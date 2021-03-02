// Desafio 1
function compareTrue(value1, value2) {
  if(value1 === true && value2 === true) {
    return true
  } else { return false}
}

// Desafio 2
function calcArea(base, height) {
  return base * height / 2
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ')
}

// Desafio 4
function concatName(array) {
  
}

// Desafio 5
function footballPoints(wins, ties) {
  wins = wins * 3
  points = wins + ties
  return points
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

console.log(compareTrue(true, false))

console.log(calcArea(51, 1))

console.log(splitSentence('vamo que vamo'))

console.log()

console.log(footballPoints(14, 8))




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
