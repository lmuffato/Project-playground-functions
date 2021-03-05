// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  let triangleArea = (base * height) / 2;
  return triangleArea;
}
console.log(calcArea(10, 50));
// Desafio 3
function splitSentence(string) {
  let arrayString = string.split(' ');
  return arrayString;
}
console.log(splitSentence('vamo que vamo'));

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]} ${array[0]}`;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;
  return winsPoints + tiesPoints;
}
console.log(footballPoints(1, 2));

// Desafio 6
function highestCount(arrayNumber) {

    let greatestNumber = findGreatestNumberInArray(arrayNumber);
    let countGreatest = countNumberInArray(arrayNumber, greatestNumber);
    return countGreatest;
  } 
console.log(highestCount([0, 0, 0]));

  function findGreatestNumberInArray(arrayNumber) {
    let larger = 0;
    for (let index = 0; index < arrayNumber.length; index += 1){
      if (larger < arrayNumber[index]){
       return larger = arrayNumber[index];
      }
    }
  }
  console.log(findGreatestNumberInArray([0, 0, 0]));

  function countNumberInArray(arrayNumber, number) {
  let counter = 0;
    for (index = 1; index < arrayNumber.length; index += 1){
        if (arrayNumber[index] === number){
        return  counter += 1;
        }
      }
  }
console.log(countNumberInArray([0, 0, 0], 0 ));

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
