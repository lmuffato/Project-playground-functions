// Desafio 1
function compareTrue(value1, value2) {
  if(value1===true && value2===true) {
    return true;
  }
  else{
    return false;
  }
}
console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
  }
console.log(calcArea(10, 50))
console.log(calcArea(5, 2))
console.log(calcArea(51, 1));
// Desafio 3
function splitSentence(string) {
let recebe = [];
recebe = string.split(' ');
return recebe ;
}
console.log(splitSentence('go Trybe'))
console.log(splitSentence('vamo que vamo'))
console.log(splitSentence('foguete'))
// Desafio 4
function concatName(arrayString) {
let names = '';
for(index = 0; index<arrayString.length; index+=1) {
if(index == 0) {
names =arrayString[arrayString.length-1] ;
}
if(index ==(arrayString.length-1)) {
names = names + ' , ' + arrayString[0] ;
}
}
return names ;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints() {
  // seu código aqui
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
