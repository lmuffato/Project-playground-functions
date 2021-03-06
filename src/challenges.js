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
function highestCount() {

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat2 = Math.abs(cat1 - mouse);
  let distanceCat1 = Math.abs(cat2 - mouse);

  if (distanceCat2 < distanceCat1) {
    return 'cat1';
  } if (distanceCat1 < distanceCat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}
console.log(catAndMouse([1, 0, 2]));

// Desafio 8
function conditionFizzBuzz(numArray2){
  let numArrayResult;
if ( numArray2 % 3 === 0 && numArray2 % 5 === 0){
  numArrayResult = 'fizzBuzz';
}else if (numArray2 % 3 === 0){
  numArrayResult = 'fizz';
}else if ( numArray2 % 5 === 0){
  numArrayResult = 'buzz';
}else {
  numArrayResult = 'bug!';
}
return numArrayResult;
}
function fizzBuzz(numArray) {
  let numArrayResult = [];
  for (let index = 0; index < numArray.length; index += 1) {
    numArrayResult.push(conditionFizzBuzz(numArray[index]));    
  }
  return numArrayResult;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));



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
