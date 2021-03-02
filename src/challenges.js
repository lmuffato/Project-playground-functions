// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
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

// Desafio 6
function highestCount(array) {
  let highestNumber = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > highestNumber) {
      highestNumber = array[index];
    }
  }
  let sum = 0;
  for (let indexCount = 0; indexCount < array.length; indexCount += 1) {
    if (highestNumber === array[indexCount]) {
      sum += 1;
    }
  }
  return sum;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = 0;
  let distanceCat2 = 0;
  if (cat1 > mouse) {
    distanceCat1 = cat1 - mouse;
  } else {
    distanceCat1 = mouse - cat1;
  }

  if (cat2 > mouse) {
    distanceCat2 = cat2 - mouse;
  } else { distanceCat2 = mouse - cat2; }
  if (distanceCat1 > distanceCat2) {
    return 'cat2';
  } else if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else { return 'os gatos trombam e o rato foge';}
}

// Desafio 8
function fizzBuzz(array) {
  let resultArray = [];

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      resultArray.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      resultArray.push('fizz');
    } else if (array[index] % 5 === 0){
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
          newstring += 1;
          break;
      case 'E':
        newstring += 2;
        break;
      case 'I':
        newstring += 3;
        break;
      case 'O':
          newstring += 4;
        break;
      case 'U':
        newstring += 5;
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
    switch (string.length){
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
