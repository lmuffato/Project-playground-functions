// Desafio 1
function compareTrue(number1, number2) {
  if (number1 === true && number2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = 0;
  area = (base * height) / 2;
  return area;
  // seu código aqui
}

// Desafio 3
function splitSentence(sentence) {
  let array = [];
  array = sentence.split(' ');
  return array;
}

// Desafio 4
function concatName(phrase) {
  let array = [];
  let counter = phrase.length;
  array.push(phrase[counter - 1]);
  array.push(phrase[0]);
  return array;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  points = wins * 3 + ties;
  return points;
  // seu código aqui
}

function calcCount(number, arrayCalc) {
  let counter = 0;
  for (let index = 0; index < arrayCalc.length; index += 1) {
    if (arrayCalc[index] === number) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 6
function highestCount(array) {
  let high = array[0];
  for (let key in array) {
    if (array[key] > high) {
      high = array[key];
    }
  }
  return calcCount(high, array);
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positionCat1 = 0;
  let positionCat2 = 0;
  positionCat1 = cat1 - mouse;
  positionCat2 = cat2 - mouse;
  if (positionCat2 > positionCat1) {
    return 'cat1';
  } if (positionCat1 > positionCat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
  // seu código aqui
}

function arrayFizzBuzz(array) {
  if (array % 3 === 0 && array % 5 !== 0) {
    return 'fizz';
  } if (array % 3 !== 0 && array % 5 !== 0) {
    return 'bug';
  }
  return 'buzz';
}

// Desafio 8
function fizzBuzz(array) {
  let arrayfb = [];
  for (let key in array) {
    if (array[key] % 3 === 0 && array[key] % 5 === 0) {
      arrayfb.push('fizzBuzz');
    } else {
      arrayfb.push(arrayFizzBuzz(array[key]));
    }
  }
  return arrayfb;
}

// Desafio 9
function decision(phrase){
  let inputPhrase;
  for (let key in phrase) {
    if (phrase[key] == 1 || phrase[key] == 2 || phrase[key] == 3 || phrase[key] == 4 || phrase[key] == 5) {
      inputPhrase = decode(phrase);
      break;
    }
    inputPhrase = encode(phrase);
    break;
  }
  return inputPhrase;
}

function encode(phrase) {
  let inputPhrase = '';
  for (let key in phrase) {
    switch(phrase[key]) {
      case 'a' :
      inputPhrase += '1';
      break;

      case 'e' :
      inputPhrase += '2';
      break;

      case 'i' :
      inputPhrase += '3';
      break;

      case 'o' :
      inputPhrase += '4';
      break;

      case 'u' :
      inputPhrase += '5';
      break;

      default :
      inputPhrase += phrase[key];

    }
  }
  return inputPhrase;

  // seu código aqui
}

function decode(phrase) {
  let inputPhrase = '';
  for (let key in phrase) {
    switch(phrase[key]) {
      case '1':
      inputPhrase += 'a';
      break;

      case '2' :
      inputPhrase += 'e';
      break;

      case '3' :
      inputPhrase += 'i';
      break;

      case '4' :
      inputPhrase += 'o';
      break;

      case '5' :
      inputPhrase += 'u';
      break;

      default :
      inputPhrase += phrase[key];

    }
  }
  return inputPhrase;

  // seu código aqui
}

let names = ['foguete', 'não', 'tem', 'ré'];

console.log(compareTrue(true, false));
console.log(calcArea(51, 1));
console.log(splitSentence('go Trybe'));
console.log(concatName(names));
console.log(footballPoints(14, 8));
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(catAndMouse(3, 9, 9));
console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(decision('hi there'));

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
