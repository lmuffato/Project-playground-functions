// Desafio 1:
function compareTrue(a, b) {
  if (a && b === true) {
    return true; 
  } return false;
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
function concatName(content) {
  let firstring = content[0];
  let lastString = content[content.length - 1];
  return lastString + ', ' + firstring;
}

// Desafio 5
function footballPoints(wins, ties) {
  wins = wins*3;
  return wins + ties;
}

// Desafio 6
function highestCount(myArrey) {
  let equalNumbers = 0;
  let higherNmber = 0;
  for (let index = 0; index < myArrey.length; index +=1) {
    if (higherNmber < myArrey[index]) {
      higherNmber = myArrey[index];
    }
  }
  for (let index2 = 0; index2 < myArrey.length; index2 +=1) {
    if (higherNmber === myArrey[index2]) {
      equalNumbers += 1;
    }
  } return equalNumbers;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  distanceCat1 = (cat1 - mouse);
  distanceCat2 = (cat2 - mouse);
  if (distanceCat2 > distanceCat1) {
    return 'cat1';
  } else if (distanceCat1 > distanceCat2) {
    return 'cat2'; 
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8

function fizzBuzz(array) {
  newArray = [];
  for (let index = 0; index <array.length; index += 1) {
      if (array[index] % 5 === 0 && array[index] % 3 === 0) {
      array[index] = 'fizzBuzz';
    } else if (array[index] % 5 === 0) {
      array[index] = 'buzz';
    } else if (array[index] % 3 === 0) {
      array[index] = 'fizz';
    } else {
      array[index] = 'bug!';
    } 
  }
  return array;
}
console.log(fizzBuzz([9, 25]))


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
}}
