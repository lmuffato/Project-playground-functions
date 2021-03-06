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

//Desafio 6
function highestCount(myArray) {



}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let wins;
  let cat1Distance = mouse - cat1;
  let cat2Distance = mouse - cat2;

  if (cat1Distance > cat2Distance){
     wins = 'cat1';
  }else if (cat2Distance > cat1Distance){
     wins = 'cat2'; 
  }else{
    wins = 'os gatos trombam e o rato foge';
  }
  return wins;
}
console.log(catAndMouse(1,3,2));

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
