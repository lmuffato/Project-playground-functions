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
function catAndMouse(mouse , cat1 , cat2) {  
  let index = {
  cat1Distance: Math.abs (cat1 - mouse),
  cat2Distance: Math.abs (cat2 - mouse),
  }
 
  if (index.cat2Distance > index.cat1Distance){
     cat1Distance = cat1 - mouse
     return 'cat1';
  } else if (index.cat1Distance > index.cat2Distance){
      cat2Distance = cat2 - mouse
      return 'cat2'; 
  } else {
    return 'os gatos trombam e o rato foge';
  } 
}
console.log(catAndMouse(1,0,2));

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
