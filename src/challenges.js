// Desafio 1
function compareTrue(value1, value2) {
  return value1 === true && value2 === true;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName(value) {
  // Recomendação do lint https://eslint.org/docs/rules/prefer-template
  let lastName = `${value[value.length - 1]},  ${value[0]}`;
  return lastName;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + (ties * 1);
  return `${totalPoints} pontos`;
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

// Testando a função compareTrue
console.log(compareTrue(false, true));
console.log(compareTrue(false, false));
console.log(compareTrue(true, true));

// Testando a função calcArea
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Testando a função concatName
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Testando a função footballPoints
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));
