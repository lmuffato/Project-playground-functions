// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}

console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

console.log(calcArea(10,50));
console.log(calcArea(5,2));
console.log(calcArea(51,1));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

let teste = "go Trybe"
console.log(splitSentence(teste));


// Desafio 4
function concatName(stringArray) {
  return `${ stringArray[stringArray.length -1] }, ${ stringArray[0] }`;
}

let arrayTeste = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
console.log(concatName(arrayTeste));

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + (ties * 1);
  return pontos;
}

console.log(footballPoints(14,8));
console.log(footballPoints(1,2));
console.log(footballPoints(0,0));

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
