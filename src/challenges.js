// Desafio 1
function compareTrue(param1, param2) {

  if (param1 && param2) {
      return true;
    } else {
      return false;
    }

}

console.log(compareTrue(false, false))

// Desafio 2
function calcArea(base, height) {
  area = (base*height) / 2;
  return area;
}

console.log(calcArea(51 , 1));

// Desafio 3
function splitSentence(string1) {
  let result = string1.split(' ');
    return result;
}

console.log(splitSentence('Go Trybe'));

// Desafio 4
function concatName(array) {
  let bothNames = `${array[array.length-1]}, ${array[0]}`;
  return bothNames;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

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

//Fim do Projeto
