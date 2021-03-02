// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 == true && value2 == true){
  return true;
  }else {
  return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return ((base * height)/2);
}

// Desafio 3
function splitSentence(array) {
  // seu código aqui
  return array.split(" ");
}

// Desafio 4
function concatName(array) {
  // seu código aqui
let lastString = array.length-1
let firstString = array[lastString] + ', ' + array[0]
return firstString;
}


// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
let winPoints = wins * 3;
let tiesPoints = ties * 1;  
let teamPoints = 0 + tiesPoints + winPoints;

return teamPoints
}


// Desafio 6
function highestCount(arrayNumbers) {
  // seu código aqui
let higher = 0;
let contador = 0;  
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] > higher) {
      higher = arrayNumbers[index];
    }
  }  
  for (index = 0; index < arrayNumbers.length; index += 1){
  if (arrayNumbers[index] == higher){
  contador += 1;
  }
  }   
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2,) {
  // seu código aqui
let resultado = 0;
  if ((cat1 - mouse) < (cat2 - mouse)){
  resultado = 'cat1';
  }
  else if ((cat1 - mouse) > (cat2 - mouse)){
  resultado = 'cat2';
  }
  else {
  resultado = 'Os gatos trombaram e o rato foge';  
  }
return resultado;
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
