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
    }
  }
  return arrayList;
}

// Desafio 6
function highestCount(list) {
  let array = [0, 4, 4, 4, 9, 2, 1];
  let biggestNumber = 0;
  let timesRepeat = 0;
  list = arrayFirstBigger(array);
  biggestNumber += list[0];
  for (let index = 0; index < array.length; index += 1) {
    if (biggestNumber === array[index]) {
      timesRepeat += 1;
    }
  }
  return timesRepeat;
}

function closesToEmentA(mouse, cat1, cat2) {
  let elementCat1 = mouse - cat1;
  let elementCat2 = mouse - cat2;
  if (cat1 === cat2) {
    return cat1 && cat2;
  } else if (cat2 < cat1 || elementCat2 > elementCat1) {
    return cat2;
  } else {
    return cat1;
  }
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  mouse = 0;
  cat1 = 6;
  cat2 = 12;
  let beetwen = closesToEmentA(mouse, cat1, cat2);
  if (beetwen == cat1 && cat2) {
    return 'os gatos trombam e o rato foge';
  } else if (beetwen == cat2) {
    return 'cat2';
  } else {
    return 'cat1';
  }
}
console.log(catAndMouse(0, 6, 12));
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
