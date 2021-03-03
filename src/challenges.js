/* Desafio 1
Como a funcoes em js so tem um retorno nao eh necessario colocar um else, pois se entrar no if ao chegar no return tera um break na funcao
pulando assim o resto */

function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, heigh) {
  let area = (base * heigh) / 2;
  return area;
}

// Desafio 3
/* https://www.w3schools.com/jsref/jsref_split.asp#:~:text=The%20split()%20method%20is,not%20change%20the%20original%20string.
Site onde aprendi sobre o metodo .split() */
function splitSentence(sentence) {
  let sentenceArray = sentence.split(' ');
  return sentenceArray;
}

// Desafio 4
function concatName(array) {
  let result = `${array[array.length - 1]}, ${array[0]}`;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let result = wins * 3 + ties;
  return result;
}

/* Desafio 6
Para aceitar no lint tive que criar uma funcao para achar o maior numero para depois poder contar as repeticoes desse numero */

function highestNumber(array) {
  let highNumber = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > highNumber) {
      highNumber = array[index];
    }
  }
  return highNumber;
}

function highestCount(array) {
  let sum = 0;
  for (let indexCount = 0; indexCount < array.length; indexCount += 1) {
    if (highestNumber(array) === array[indexCount]) {
      sum += 1;
    }
  }
  return sum;
}

// Desafio 7

function highestNumberSubtraction(num1, num2) {
  if (num1 > num2) {
    return num1 - num2;
  } return num2 - num1;
}

function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = highestNumberSubtraction(cat1, mouse);
  let distanceCat2 = highestNumberSubtraction(cat2, mouse);

  if (distanceCat1 > distanceCat2) {
    return 'cat2';
  } if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function divisibleBy3(num) {
  if (num % 3 === 0) {
    return true;
  } return false;
}

function divisibleBy5(num) {
  if (num % 5 === 0) {
    return true;
  } return false;
}

function fizzBuzz(array) {
  let resultArray;

  for (let index = 0; index < array.length; index += 1) {
    if (divisibleBy3(array[index]) && divisibleBy5(array[index])) {
      resultArray.push('fizzBuzz');
    } else if (divisibleBy3(array.length)) {
      resultArray.push('fizz');
    } else if (dibisibleBy5(array.length)) {
      resultArray.push('buzz');
    } else {
      resultArray.push('bug!');
    }
  return resultArray;
  }
}

// Desafio 9
function encode(string) {
  let newString
  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]){
      case 'A':
          newstring += '1';
          break;
      case 'E':
        newstring += '2';
        break;
      case 'I':
        newstring += '3';
        break;
      case 'O':
          newstring += '4';
        break;
      case 'U':
        newstring += '5';
      break;
      default:
        newstring += string[index];
        break;
    }
  }
  return newstring;
}

function decode(string) {
  let newString
  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]){
      case 1:
          newstring += 'A';
          break;
      case 2:
        newstring += 'E';
        break;
      case 3:
        newstring += 'I';
        break;
      case 4:
          newstring += 'O';
        break;
      case 5:
        newstring += 'U';
      break;
      default:
        newstring += string[index];
        break;
    }
  }
  return newString;
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
