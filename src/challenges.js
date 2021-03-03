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
  let arrayList = [];
  for (let index = 0; index < list.length - 1; index += 1) {
    if (list[index] > list[index + 1]) {
      arrayList.push(list[index]);
    } else if (list[index] < list[index + 1]) {
      arrayList.push(list[index + 1]);
    } else {
      arrayList.push(list[index]);
    }
  }
  return arrayList;
}

// Desafio 6
function highestCount(list) {
  let biggestNumber = 0;
  let timesRepeat = 0;
  let array = arrayFirstBigger(list);
  biggestNumber += array[0];
  for (let index = 0; index < list.length; index += 1) {
    if (biggestNumber === list[index]) {
      timesRepeat += 1;
    }
  }
  return timesRepeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1ToMouse = cat1 - mouse;
  let cat2Tomouse = cat2 - cat1;
  Math.abs(cat1ToMouse);
  Math.abs(cat2Tomouse);
  if (cat1 === cat2) {
    return 'os gatos trombam e o rato foge';
  } else if (cat2Tomouse < cat1ToMouse) {
    return 'cat2';
  } else {
    return 'cat1';
  }
}

let list = [2, 15, 7, 9, 45];

function arrayRunner(array) {
  let result = [];
  for (let index in array) {
    result.push(array[index]);
  }
  return result;
}

// Desafio 8
function fizzBuzz(array) {
  let divBy = [3, 5];

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
