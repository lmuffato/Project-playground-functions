// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true){
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = base * height / 2;

  return area;
}

// Desafio 3
function splitSentence(string) {

  return string.trim().split(/\s+/);
}

// Desafio 4
function concatName(array) {
  
  let firstElement = array[0];
  let lastElement = array[array.length - 1];

  return lastElement + ', ' + firstElement;
}

// Desafio 5
function footballPoints(wins, ties) {
  
  let teamPoints = (wins * 3) + (ties * 1);

  return teamPoints
}

// Desafio 6
function highestCount(numberArray) {
let numberCount = 0;
let maxCount = 0;

  for (let i = 0; i < numberArray.length; i += 1){  
      let num = numberArray[i];
      if (num === maxCount){
        numberCount += i + 1;
      }
      if (num > maxCount) { 
        maxCount = num;
        numberCount = 1;
      }
  }
  
  return maxCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let array = [mouse, cat1, cat2];
  let mouseCat1Distancy = array[0] - array[1];
  let mouseCat2Distancy = array[0] - array[2];

  if (mouseCat1Distancy > mouseCat2Distancy){
    return 'cat2';
  }

  else if (mouseCat1Distancy < mouseCat2Distancy){
    return 'cat1';
  }

  else {
    return "os gatos trombam e o rato foge";
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

console.log(catAndMouse(20, 16, 8));

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
