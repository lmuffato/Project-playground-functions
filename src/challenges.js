// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === false && value2 === false) {
    value1 = true;
    return value1 === value2;
  }
  return value1 === value2;
}

// Desafio 2
function calcArea(base, height) {
  let triangleArea = (base * height) / 2;

  return triangleArea;
}

// Desafio 3
function splitSentence(string) {
  let result = string.split(' ');

  return result;
}

// Desafio 4
function concatName(string) {
  return `${string[string.length - 1]}, ${string[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = 3;
  let tiesPoints = 1;
  return (winsPoints * wins) + (tiesPoints * ties);
}

function arrayFirstBigger(list) {
  let biggerNumber = list[0];
  for (let index = 0; index < list.length - 1; index += 1) {
    if (list[index] > biggerNumber) {
      biggerNumber = list[index];
    }
  }
  return biggerNumber;
}

// Desafio 6
function highestCount(list) {
  let timesRepeat = 0;
  let biggestNumber = arrayFirstBigger(list);
  for (let index = 0; index < list.length; index += 1) {
    if (biggestNumber === list[index]) {
      timesRepeat += 1;
    }
  }
  return timesRepeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1ToMouse = Math.abs(cat1 - mouse);
  let cat2Tomouse = Math.abs(cat2 - mouse);
  if (cat1ToMouse > cat2Tomouse) {
    return 'cat2';
  } if (cat2Tomouse === cat1ToMouse) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat1';
}

// Desafio 8
function fizzBuzz() {

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
