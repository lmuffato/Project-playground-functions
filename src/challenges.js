// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui.
  let retorno = null;

  if (value1 === true && value2 === true) {
    retorno = true;
  } else {
    retorno = false;
  }
  return retorno;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = 0;
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  let split = sentence.split(' ');
  return split;
}

// Desafio 4
function concatName(stringss) {
  // seu código aqui
  let primeiro = stringss[0];
  let ultimo = stringss[stringss.lenght];
  let concat = `${ultimo}, ${primeiro}`;
  return concat;
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
