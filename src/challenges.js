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
      fizzBuzzArray.push('fizzbuzz');
    } else if (array[numberIndex] % 3 === 0) {
      fizzBuzzArray.push('fizz');
    } else if (array[numberIndex] % 5 === 0) {
      fizzBuzzArray.push('buzz');
    } else {
      fizzBuzzArray.push('bug');
    }
  }

  return fizzBuzzArray;
}

// Desafio 9
function splitString(string) {
  return string.split('');
}

function encode(string) {
  const message = splitString(string);
  let encodedMessage = [];

  for (let letterIndex in message) {
    if (message[letterIndex] === 'a') {
      encodedMessage.push('1');
    } else if (message[letterIndex] === 'e') {
      encodedMessage.push('2');
    } else if (message[letterIndex] === 'i') {
      encodedMessage.push('3');
    } else if (message[letterIndex] === 'o') {
      encodedMessage.push('4');
    } else if (message[letterIndex] === 'u') {
      encodedMessage.push('5');
    } else {
      encodedMessage.push(message[letterIndex]);
    }
  }
  return encodedMessage.join('');
}
function decode(string) {
  const encodedMessage = splitString(string);
  let message = [];

  for (let letterIndex in encodedMessage) {
    if (encodedMessage[letterIndex] === '1') {
      message.push('a');
    } else if (encodedMessage[letterIndex] === '2') {
      message.push('e');
    } else if (encodedMessage[letterIndex] === '3') {
      message.push('i');
    } else if (encodedMessage[letterIndex] === '4') {
      message.push('o');
    } else if (encodedMessage[letterIndex] === '5') {
      message.push('');
    } else {
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
