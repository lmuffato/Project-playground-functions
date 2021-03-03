// Desafio 1
function compareTrue(number1, number2) {
  if (number1 === true && number2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(nameSplit) {
  let resultSplit = nameSplit.split(' ');
  return resultSplit;
}

// Desafio 4
function concatName(name) {
  let firtArray = name[0];
  let ultimateArrayNumber = name.length - 1;
  let ultimateArray = name[ultimateArrayNumber];
  let resultArray = ultimateArray + ', ' + firtArray;
  return resultArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiePoints = ties * 1;
  let totalPoints = winsPoints + tiePoints;
  return totalPoints;
}

// Desafio 6
function highestCount(numberRepeat) {
  let maxNumber = Math.max(...numberRepeat);
  let count = 0;
  for (let index = 0; index < numberRepeat.length; index += 1){
    let walks = numberRepeat[index];
    if (walks === maxNumber){
    count += 1;
    }
  }
  return count;
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

console.log(compareTrue(true, true));
console.log(compareTrue(false, true));
console.log(compareTrue(true, true));

console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

console.log(splitSentence('go trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

console.log(concatName(['Lucas', 'Cassio', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));

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
