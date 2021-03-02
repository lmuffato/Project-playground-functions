// Desafio 1
function compareTrue(firstBoolean, secondBoolean) {
  if (firstBoolean && secondBoolean) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(arrayName) {
  return (arrayName[arrayName.length - 1] + ', ' + arrayName[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(arrayNumbers) {
  let count = 0;
  let highestNumber = 0;
  for (let index in arrayNumbers) {
    if (arrayNumbers[index] > highestNumber) {
      highestNumber = arrayNumbers[index];
    }
  }
  for (let index in arrayNumbers) {
    if (arrayNumbers[index] === highestNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceOfCat1 = cat1 - mouse;
  let distanceOfCat2 = cat2 - mouse;
  let str = '';
  if (distanceOfCat1 === distanceOfCat2){
    str = 'os gatos trombam e o rato foge';
  } else if (distanceOfCat1 < distanceOfCat2){
    str = 'cat1';
  } else {
    str = 'cat2';
  }
  return str;
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
