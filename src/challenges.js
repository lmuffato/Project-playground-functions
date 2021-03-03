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
function highestCount(arrayNumbers) {
  let higherNumber = [0]
  let numberOfTimesItAppears = 0
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] > higherNumber) {
      higherNumber = arrayNumbers[index]
    }
  }
  for (let indexNumber  = 0; indexNumber < arrayNumbers.length; indexNumber += 1) {
    if (arrayNumbers[indexNumber] >= higherNumber) {
      numberOfTimesItAppears += 1
    }
  }
  return numberOfTimesItAppears
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 > cat2) {
    return 'cat2'
  } else if (cat2 > cat1){
    return 'cat1'
  } else{
    return 'os gatos trombam e o rato foge'
  }
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
