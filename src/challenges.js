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
function concatName(strArray) {
  return strArray[0], strArray[strArray.lenght - 1]
}

// Desafio 5
function footballPoints(wins, ties) {
  wins = wins * 3
  points = wins + ties
  return points
}

// Desafio 6
function highestCount(array1) {
  
  for(let i = 0; i < array1.lenght; i += 1) {
    if(array1[i] > highestNumber) {
      let highestNumber = array1[i]
      return highestNumber
    }
  }
}

// Desafio 7
function catAndMouse(cat1, cat2) {
  if(cat1 < cat2) {
    return 'cat1'
  } else if(cat1 > cat2) {
    return'cat2'
} else 
    

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

console.log(concatName('Lucas', 'Cassiano', 'Ferraz', 'Paolillo'))

console.log(footballPoints(14, 8))

console.log(highestCount(1, 2, 3, 4))

console.log(catAndMouse(6, 2))


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
