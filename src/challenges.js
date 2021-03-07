// Desafio 1
function compareTrue(value1, value2) {
  if (value1 == true && value2 == true) {  
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
return (base * height) / 2;
}

// Desafio 3
function splitSentence(string_1) {
  let stringArray = [];
  return stringArray = string_1.split(" ", 3);
}

// Desafio 4
function concatName(myArray) {
  
  return myArray[myArray.length-1] + ', ' + myArray[0];
}

// Desafio 5
function footballPoints(wins,ties) {
  let points = 0;
  return  points = (wins*3)+(ties*1);
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
