// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
//console.log(compareTrue(true, true)); 

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;//objeto
  return area;
}
//console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  let phraseArray = string.split (' ');
  return phraseArray;
}
//console.log(splitSentence('Go Trybe'));
//***Como usar o split: https://www.guj.com.br/t/o-metodo-split/100456

// Desafio 4
function concatName(string) {
  let name = string;
  name = string[(string.length - 1)] + ", " + string[0];
    return name;
}
  //console.log(concatName(['foguete', 'não', 'tem', 'ré']));

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties;    
  return points;
}
//console.log(footballPoints(14, 8));

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
}