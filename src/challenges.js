// Desafio 1
function compareTrue(a, b) {
  if (a && b) {
    return true;
  }else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return ( (base * height) / 2)
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ')
}

// Desafio 4
function concatName(stringsArray) {
  let outputString = ''

  outputString = `${stringsArray[stringsArray.length - 1]} ${stringsArray[0]}`

  return outputString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + ties

  return totalPoints;
}

// Desafio 6
function highestCount(numbersArray) {
  let highNumber = 0;
  let highNumberCount = 0;

  for (let index = 0 ; index < numbersArray.length ; index += 1){
    if (numbersArray[index] > highNumber) {
      highNumber = numbersArray[index];
    }
  }

  numbersArray.map((number) => {
    if (highNumber == number) {
      highNumberCount += 1;
    }
  })

  return highNumberCount;
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
