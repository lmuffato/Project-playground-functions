// Desafio 1
function compareTrue(boolOne, boolTwo) {
  // seu código aqui
  if (boolOne && boolTwo === true) {
    return true;
  } return false;
} compareTrue(true, true);
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
} calcArea(51, 1);
// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
} splitSentence('foguete');
// Desafio 4
function concatName(name) {
  // seu código aqui
  return `${name[name.length - 1]}, ${name[0]}`;
} concatName(['captain', 'my', 'captain']);
// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + (ties * 1);
} footballPoints(5, 5);
// Desafio 6
function highestCount(arrayNumbers) {
  // seu código aqui
  let biggestNumber = 0;
  let hit = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (biggestNumber < arrayNumbers[index]) {
      biggestNumber = arrayNumbers[index];
    }
  }
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (biggestNumber === arrayNumbers[index]) {
      hit += 1;
    }
  } return hit;
} highestCount([9, 1, 2, 3, 9, 5, 7]);
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let positionCat1 = 0;
  let positionCat2 = 0;
  positionCat1 = cat1 - mouse;
  positionCat2 = cat2 - mouse;
  if (positionCat1 < positionCat2) {
    return console.log('cat1');
  } if (positionCat1 > positionCat2) {
    return console.log('cat2');
  } return console.log('os gatos trombam e o rato foge');
} catAndMouse(1, 6, 6);
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
