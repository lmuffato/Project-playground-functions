// Desafio 1
function compareTrue(firstValue, secondValue) {
  if (firstValue === true && secondValue === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(stringArray) {
  let firstName = stringArray[0];
  let lastName = stringArray[stringArray.length - 1];

  return `${lastName}, ${firstName}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  const winsPoints = 3;
  const totalPoints = (winsPoints * wins) + ties;

  return totalPoints;
}

// Desafio 6
function findHighestValue(array) {
  for (let indexValue = 0; indexValue < array.length; indexValue += 1) {
    let numberOfHits = 0;
    for (let indexComparation = 0; indexComparation < array.length; indexComparation += 1) {
      if (array[indexValue] >= array[indexComparation]) {
        numberOfHits += 1;
        if (numberOfHits === array.length) {
          return array[indexValue];
        }
      }
    }
  }
}

function highestCount(array) {
  let highestNumber = findHighestValue(array);
  let highestNumberShow = array.filter(function (value) { return value === highestNumber; }).length;

  return highestNumberShow;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = cat1 - mouse;
  let cat2Distance = cat2 - mouse;

  if (cat1Distance === cat2Distance) {
    return 'os gatos trombam e o rato foge';
  } if (cat1Distance < cat2Distance) {
    return 'cat1';
  } if (cat2Distance < cat1Distance) {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let fizzBuzzArray = [];

  for (let numberIndex in array) {
    if (array[numberIndex] % 3 === 0 && array[numberIndex] % 5 === 0) {
      fizzBuzzArray.push('fizzBuzz');
    } else if (array[numberIndex] % 3 === 0) {
      fizzBuzzArray.push('fizz');
    } else if (array[numberIndex] % 5 === 0) {
      fizzBuzzArray.push('buzz');
    } else {
      fizzBuzzArray.push('bug!');
    }
  }

  return fizzBuzzArray;
}

console.log(fizzBuzz([9,25]))

// Desafio 9
function splitString(string) {
  return string.split('');
}

function encode(string) {
  const message = splitString(string);
  let encodedMessage = [];

  for (let letterIndex in message) {
    switch (message[letterIndex]) {
    case 'a':
      encodedMessage.push('1');
      break;
    case 'e':
      encodedMessage.push('2');
      break;
    case 'i':
      encodedMessage.push('3');
      break;
    case 'o':
      encodedMessage.push('4');
      break;
    case 'u':
      encodedMessage.push('5');
      break;

    default:
      encodedMessage.push(message[letterIndex]);
    }
  }

  return encodedMessage.join('');
}

function decode(string) {
  const encodedMessage = splitString(string);
  let message = [];

  for (let letterIndex in encodedMessage) {
    switch (encodedMessage[letterIndex]) {
    case '1':
      message.push('a');
      break;
    case '2':
      message.push('e');
      break;
    case '3':
      message.push('i');
      break;
    case '4':
      message.push('o');
      break;
    case '5':
      message.push('u');
      break;

    default:
      message.push(encodedMessage[letterIndex]);
    }
  }

  return message.join('');
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
