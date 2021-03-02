// Desafio 1
function compareTrue(boolOne, boolTwo) {
  // seu código aqui
  if (boolOne && boolTwo === true) {
    return true;
  } return false;
}
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;;
} calcArea(51, 1);
// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let stringToSplit = '';
  stringToSplit = string.split(' ');
  return console.log(stringToSplit);
}
// Desafio 4
function concatName(name) {
  // seu código aqui
  return console.log(name[name.length - 1], name[0]);
}
// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let resultEndGame = (wins * 3) + (ties * 1);
  return console.log(resultEndGame);
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
console.log(compareTrue(true, true));

splitSentence('foguete');
concatName(['captain', 'my', 'captain']);
footballPoints(5, 5);

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
