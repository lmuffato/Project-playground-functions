// Desafio 1
function compareTrue(value1, value2) {
  if(value1 === true && value2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2
  return result
}

// Desafio 3
function splitSentence(string) {
  let phase = string.split(' ')
  return phase
}

// Desafio 4
function concatName(list) {
  let firstName = list[0]
  let lastName = list[list.length - 1]
  let newlist = lastName + ', ' + firstName
  return newlist
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsChampionship = (wins * 3) + ties
  return pointsChampionship
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
