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
  wins = wins * 3;
  return wins + ties;
}

// Desafio 6
function highestCount(myArrey) {
  let equalNumbers = 0;
  let higherNumber = 0;
  for (let index = 0; index < myArrey.length; index += 1) {
    if (higherNumber < myArrey[index]) {
      higherNumber = myArrey[index];
    }
  }
  for (let index2 = 0; index2 < myArrey.length; index2 += 1) {
    if (higherNumber === myArrey[index2]) {
      equalNumbers += 1;
    }
  } return equalNumbers;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  if (distanceCat2 > distanceCat1) {
    return 'cat1';
  } else if (distanceCat1 > distanceCat2) {
    return 'cat2';
  } return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 5 === 0 && array[index] % 3 === 0) {
      newArray.push('fizzBuzz');
    } else if (array[index] % 5 === 0) {
      newArray.push('buzz');
    } else if (array[index] % 3 === 0) {
      newArray.push('fizz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9
function zencode(string) {
  string = string.replace('a', '1')
    .replace('e', '2').replace('i', '3')
    .replace('o', '4')
    .replace('u', '5');
  return string;
}

function zdecode(string) {
  string = string.replace('1', 'a').replace('2', 'e').replace('3', 'i')
    .replace('4', 'o')
    .replace('5', 'u');
  return string;
}
console.log(zdecode('Th3s 3s 1n 2nc4d3ng t2st.'));

// Desafio 9 versao 2

function encode(string) {
  let newString = '';

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'a') {
      newString += '1';
    } else if (string[index] === 'e') {
      newString += '2';
    } else if (string[index] === 'i') {
      newString += '3';
    } else if (string[index] === 'o') {
      newString += '4';
    } else if (string[index] === 'u') {
      newString += '5';
    } else {
      newString += string[index];
    }
    return newString;
  }
}
console.log(encode('paralelepipedo paradinho'));
function decode(string) {
  let newString = '';

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === '1') {
      newString.push('a');
    } else if (string[index] === '2') {
      newString.push('e');
    } else if (string[index] === '3') {
      newString.push('i');
    } else if (string[index] === '4') {
      newString.push('o');
    } else if (string[index] === '5') {
      newString.push('u');
    } else {
      newString.push(string[index]);
    }
    return newString;
  }
}
console.log(decode('Th3s 3s 1n 2nc4d3ng t2st.'));

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
}
