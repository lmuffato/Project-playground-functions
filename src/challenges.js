// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return(true)
  } else {
    return(false)
  }
}

// Desafio 2
function calcArea(base, height) {
  calcArea = base * height / 2
 return(calcArea);
}

// Desafio 3
function splitSentence(string) {
  let phrase = string.split(' ')
  return(phrase);
}

// Desafio 4
function concatName(arrayStrings) {
  let lastItem = arrayStrings.length - 1
  if (lastItem > 0) {
  return(arrayStrings[lastItem] + ' , ' + arrayStrings[0])
  } return(arrayStrings)
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = 3;
  let empates = 1
  return(vitorias * wins + empates * ties)
}
console.log(footballPoints(0, 0))

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
