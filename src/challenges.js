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
function splitSentence(phrase ) {
  let wordReciver = "";
  let arrayReciver = [];
  for (let index = 0; index < phrase.length; index += 1) {
    if(phrase[index] != " " ) {
      wordReciver += phrase[index]
    } else {
      arrayReciver =arrayReciver.push(wordReciver);
    };
  };
  return arrayReciver;
}

// Desafio 4
function concatName(phraseList) {
  return console.log (phraseList[phraseList.length -1] + ',' + phraseList[0]);
}

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
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
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
