// Desafio 1
function compareTrue(param1, param2) {
  return param1 === true && param2 === true;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(nomes) {
  let ultimoNome = nomes[nomes.length - 1];
  let primeiroNome = nomes[0];
  return `${ultimoNome}, ${primeiroNome}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins * 3 + ties * 1;
  return pontos;
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
