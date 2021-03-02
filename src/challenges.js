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
function divisibleBy3(number) {
  if (number % 3 === 0 && number % 5 !== 0) {
    return true;
  }
}

function divisibleBy5(number) {
  if (number % 3 !== 0 && number % 5 === 0) {
    return true;
  }
}

function divisibleBy3and5(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return true;
  }
}

function notDivisibleBy3or5(number) {
  if (number % 3 !== 0 && number % 5 !== 0) {
    return true;
  }
}
function isDivisibleBy3Or5(number) {
  if (divisibleBy3(number)) {
    return 'divisible by 3';
  }
  if (divisibleBy5(number)) {
    return 'divisible by 5';
  }
  if (divisibleBy3and5(number)) {
    return 'divisible by 3 and 5';
  }
  if (notDivisibleBy3or5(number)) {
    return 'NOT divisible by 3 or 5';
  }
}

function fizzBuzz(numbersArr) {
  const numbersMapped = numbersArr.map((number) => {
    if (isDivisibleBy3Or5(number) === 'divisible by 3') return 'fizz';
    if (isDivisibleBy3Or5(number) === 'divisible by 5') return 'buzz';
    if (isDivisibleBy3Or5(number) === 'divisible by 3 and 5') return 'fizzBuzz';
    if (isDivisibleBy3Or5(number) === 'NOT divisible by 3 or 5') return 'bug!';
    return 'Not an valid number.';
  });

  return numbersMapped;
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
