// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ')
}

// Desafio 4
function concatName(arr) {
  let str = ''
  str = str + (arr[arr.length - 1]) + ', ' + (arr[0])
  return str
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties * 1)
}

// Desafio 6
function highestCount(arr) {
  let count = 0
  for (index = 0; index < arr.length; index++) {
    let highernum = 0
    for (i = 0; i < arr.length; i++) {
      if (arr[index] < arr[i]) {
        highernum = highernum + 1
      }
    }
    if (highernum === 0) {
      count = count + 1
    }
  }
  return count
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1'
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2'
  } else {
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
