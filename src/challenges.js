// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  else {
    return false;
  }
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
console.log(calcArea(10, 50));

// Desafio 3
function splitSentence(sentence) {
  sentence = sentence.split(' ');
  return sentence
}
console.log('foguete trybe')

// Desafio 4
function concatName(words) {
  for (index = 0; index < words.length; index = index + 1) {
    let firstWord = words[0];
    let lastWord = words.length - 1; 
    return firstWord + ' ' + lastWord;
  }
}
console.log(concatName("André", "Augusto", "Dias", "Aguilar"));

// Desafio 5
function footballPoints(wins, ties) {
  let pontuacaoVitorias = wins * 3;
  let pontuacaoEmpates = ties * 1;
  let totalPontos = pontuacaoVitorias + pontuacaoEmpates;
  return totalPontos
}
console.log(footballPoints(14,8));

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
