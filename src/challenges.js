// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}
// abaixo o print do resultado da função (false, nesse caso)
// console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// abaixo o print do resultado da função
// console.log(calcArea(10, 50));
// console.log(calcArea(5, 2));
// console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// console.log(splitSentence('go Trybe'));
// console.log(splitSentence('vamo que vamo'));
// console.log(splitSentence('foguete'));

// Desafio 4
function concatName(stringArray) {
  let lastItem = stringArray[stringArray.length - 1];
  let firstItem = stringArray[0];
  let space = ', ';
  return lastItem + space + firstItem;
}

// // console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
// // console.log(concatName(['foguete', 'não', 'tem', 'ré']));
// // console.log(concatName(['captain', 'my', 'captain']));

// // outra opção seria:
// function concatName(stringArray) {
//   return (stringArray[stringArray.length - 1]) + ', ' + stringArray[0];
// }

// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// console.log(footballPoints(14 , 8));
// console.log(footballPoints(1 , 2));
// console.log(footballPoints(0 , 0));

// Desafio 6
function highestCount(numberArray) {
  let highestNumber = Math.max.apply(Math, numberArray);
  let repetion = 0;
  for (let index=0; index < numberArray.length; index += 1) {
    if (highestNumber === numberArray[index]) {
      repetion += 1;
    }
  }
  return repetion
}

// console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
// console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
// console.log(highestCount([0, 0, 0]));

// // por que não consigo printar o valor do highestNumber ?
// console.log(highestNumber); 

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
