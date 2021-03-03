// Desafio 1
function compareTrue(values1, values2) {
  // seu código aqui
  if (values1 === true && values2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let result;
  result = (base * height) / 2;
  return result;
}

// Desafio 3
// pesquisei sobre o método no site https://www.w3schools.com/jsref/jsref_split.asp
function splitSentence(phrase) {
  // seu código aqui
  let phraseArray = [];
  phraseArray = phrase.split(' ');
  return phraseArray;
}

// Desafio 4
// Pesquisei sobre como pegar o último valor de um vetor aqui: https://pt.stackoverflow.com/questions/87416/como-retornar-o-%C3%BAltimo-registro-de-um-array-com-javascript-ou-jquery
// E sobre o método que concatena strings, pesquisei aqui: https://www.w3schools.com/jsref/jsref_concat_string.asp
function concatName(names) {
  // seu código aqui
  let arrayNames = [];
  arrayNames = names;
  let lastName = arrayNames[arrayNames.length - 1];
  let firstName = arrayNames[0];
  return lastName.concat(', ' + firstName);
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
