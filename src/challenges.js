// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2 === true) {
    return true;
  } return false;
  // código do inicio do esclarecimento técnico
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
// Pesquisei nos sites seguintes: https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254 ,  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
}

// Desafio 4
function concatName(arr) {
  // sites usados como referência https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals, https://www.devmedia.com.br/javascript-concat-concatenando-arrays-e-strings/37964, https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254, https://pt.stackoverflow.com/questions/87416/como-retornar-o-%C3%BAltimo-registro-de-um-array-com-javascript-ou-jquery
  return `${arr[arr.length - 1]}, ${arr[0]}`;
}

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
