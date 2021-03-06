// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  if (value1 === false || value2 === false) {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(stringList) {
  let concat = `${stringList[stringList.length - 1]}, ${stringList[0]}`;
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = ((wins * 3) + (ties));
  return points;
}

// Desafio 6
function highestCount(list) {
  let larger = Math.max(...list);
  let count = 0;
  for (let indexRepeat = 0; indexRepeat < list.length; indexRepeat += 1) {
    if (larger === list[indexRepeat]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = cat1 - mouse;
  let distCat2 = cat2 - mouse;
  distCat1 = Math.abs(distCat1);
  distCat2 = Math.abs(distCat2);
  if (distCat1 < distCat2) {
    return 'cat1';
  }
  if (distCat2 < distCat1) {
    return 'cat2';
  }
  if (distCat1 === distCat2) {
    return 'os gatos trombam e o rato foge';
  }
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
