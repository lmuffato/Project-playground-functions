// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2) {
    return true;
  }
  return false;
}

console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string1) {
  let result = string1.split(' ');
  return result;
}

console.log(splitSentence('Go Trybe'));

// Desafio 4
function concatName(array) {
  let bothNames = `${array[array.length - 1]}, ${array[0]}`;
  return bothNames;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}
console.log(footballPoints(0, 0));

// Desafio 6 <!-Contribuição Lucas Godoi->
function highestCount(listNumbers) {
  let high = 0;
  let count = 0;
  for (let index = 0; index < listNumbers.length; index += 1) {
    if (listNumbers[index] > high) {
      high = listNumbers[index];
    }
    if (listNumbers[index] === high) {
      count += 1;
    }
  }

  return count;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
// Desafio 7 --- Contribuição Lucas Godoi e Maria Luiza Victorio ---
function catAndMouse(mouse, cat1, cat2) {
  let msg = '';
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    msg = 'cat1';
  }
  if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    msg = 'cat2';
  } else msg = 'os gatos trombam e o rato foge';
  return msg;
}
console.log(catAndMouse(0, 6, 12));
// Desafio 8
function zapZap(zip) {
  if (zip % 3 === 0 && zip % 5 === 0) {
    return 'fizzBuzz';
  } if (zip % 3 === 0) {
    return 'fizz';
  } if (zip % 5 === 0) {
    return 'buzz';
  }  
  return 'bug!';
}
function fizzBuzz(array) {
  let zap = [];
  for (let index = 0; index < array.length; index += 1) {
    zap.push(zapZap(array[index]))
  }
  return zap;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9 <--Contribuição de Henrique Lima-->
function encode(sentence) {
  let imputSentence = '';
  for (let key in sentence) {
    switch (sentence[key]) {
      case 'a':
        imputSentence += '1';
      case 'e':
        imputSentence += '2';
      case 'i':
        imputSentence += '3';
      case 'o':
        imputSentence += '4';
      case 'u':
        imputSentence += '5';

      default:
        imputSentence += sentence[key];
    }
  }
  return imputSentence;
}
console.log(encode('Socorro'));

function decode(s3nt3nc3) {
  let imputS3ntenc3 = '';
  for (let key in s3nt3nc3) {
    switch (s3nt3nc3[key]) {
      case '1':
        imputS3ntenc3 += 'a';
        break;
      case '2':
        imputS3ntenc3 += 'e';
        break;
      case '3':
        imputS3ntenc3 += 'i';
        break;
      case '4':
        imputS3ntenc3 += 'o';
        break;
      case '5':
        imputS3ntenc3 += 'u';
        break;
      default:
        imputS3ntenc3 += s3nt3nc3[key];
    }
  }
  return imputS3ntenc3;
}

console.log(decode('M2 1j5d1'));

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
  splitSentence
};

//Fim do Projeto
