// Desafio 1
function compareTrue(valueA, valueB) {
  if (valueA === true && valueB === true) {
    return true;
  }

  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(message) {
  return message.split(' ');
}

// Desafio 4
function concatName(arr) {
  return `${arr[arr.length - 1]}, ${arr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  if (wins) {
    points += wins * 3;
  }
  if (ties) {
    points += ties * 1;
  }

  return points;
}

// Desafio 6
function highestCount(numbersArr) {
  let highestNumber = numbersArr[0];

  for (let index = 1; index < numbersArr.length; index += 1) {
    if (numbersArr[index] > highestNumber) {
      highestNumber = numbersArr[index];
    }
  }

  return numbersArr.filter((number) => number === highestNumber).length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const distanceCat1 = Math.abs(cat1 - mouse);
  const distanceCat2 = Math.abs(cat2 - mouse);

  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }

  if (distanceCat2 < distanceCat1) {
    return 'cat2';
  }

  if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numbersArr) {
  const resultsArr = [];

  for (let index = 0; index < numbersArr.length; index += 1) {
    if (numbersArr[index] % 3 === 0 && numbersArr[index] % 5 !== 0) {
      resultsArr.push('fizz');
    }
    if (numbersArr[index] % 3 !== 0 && numbersArr[index] % 5 === 0) {
      resultsArr.push('buzz');
    }
    if (numbersArr[index] % 3 === 0 && numbersArr[index] % 5 === 0) {
      resultsArr.push('fizzBuzz');
    }
    if (numbersArr[index] % 3 !== 0 && numbersArr[index] % 5 !== 0) {
      resultsArr.push('bug!');
    }
  }

  return resultsArr;
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
