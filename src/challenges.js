// Desafio 1
function compareTrue(value1, value2) {
  if (value1 == true && value2 == true){
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  area = (base*height)/2
  return area
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ")
}

// Desafio 4
function concatName(array) {
  let firstName = array[0]
  let lastName = array[array.length-1]
  return lastName + ", " + firstName
}

// Desafio 5
function footballPoints(wins, ties) {
  return (3*wins) + ties
}

// Desafio 6
function highestCount(array) {
  let countFrequency = 0;
  let highestNumber = array[0];

  for (let index = 0; index < array.length; index +=1) {
    if (array[index] > highestNumber) {
      highestNumber = array[index]
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] == highestNumber) {
      countFrequency += 1
    }
  }

  return countFrequency
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let whoCatch = ''
  if (cat1 == cat2) {
    whoCatch = 'os gatos trombam e o rato foge'
  } else if ((Math.abs(mouse - cat1) > Math.abs(mouse - cat2))) {
    whoCatch = 'cat2'
  } else {
    whoCatch = 'cat1'
  }
  return whoCatch
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






