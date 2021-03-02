// Desafio 1
function compareTrue(value1, value2) {
  let result = Boolean;
  if (value1 && value2 === true) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2;
}

// // Desafio 3
function splitSentence(phrase) {
    return phrase.split(' ');
}

// Desafio 4
function concatName(phraseList) {
  return phraseList[phraseList.length -1] + ',' + phraseList[0]
}
console.log(concatName(['lucas', 'henrique', 'da', 'paz']));
// Desafio 5
function footballPoints(wins, ties) {
  let points = ((wins * 3) + ( ties * 1));
  return points;
}

// Desafio 6
function highestCount(numberList) {
  let numberOfReplays;
  let numberMemory = numberList[0];
  for (let index = 1; index < numberList.length; index += 1) {    
    if ( numberList[index] > numberList[index -1]) {
      numberMemory = numberList[index];
    };
    if (numberMemory === numberList[index]) {
      numberOfReplays += 1;
    };
  }
  return numberOfReplays;
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
