// Challenge 10

// Reference for the operation of the sort method.
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

function sortArray(arrayOfObjects) {
  arrayOfObjects.sort(function (a, b) {
    if (a.tech > b.tech) {
      return 1;
    }
    if (a.tech < b.tech) {
      return -1;
    }
    return 0;
  });
  return arrayOfObjects;
}

function techList(technologiesArray, name) {
  let arrayOfObjects = [];

  if (technologiesArray.length === 0) {
    return ('Vazio!');
  }

  for (let index = 0; index < technologiesArray.length; index += 1) {
    let object = {
      tech: technologiesArray[index],
      name,
    };
    arrayOfObjects.push(object);
  }
  let sortedArray = sortArray(arrayOfObjects);

  return sortedArray;
}

// Challenge 11

function formatsNumber(arrayOfNumbers) {
  let string = arrayOfNumbers.join('');
  let ddd = string.slice(0, 2);
  let firstPart = string.slice(2, 7);
  let lastPart = string.slice(7, 11);
  return (`(${ddd}) ${firstPart}-${lastPart}`);
}
function counter(number, arrayOfNumbers) {
  let count = 0;

  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (number === arrayOfNumbers[index]) {
      count += 1;
    }
  }
  return count;
}
function isRepeatedThreeTimes(arrayOfNumbers) {
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (counter(arrayOfNumbers[index], arrayOfNumbers) >= 3) {
      return true;
    }
  }
  return false;
}

function isAValidArray(arrayOfNumbers) {
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (arrayOfNumbers[index] < 0 || arrayOfNumbers[index] > 9) {
      return false;
    }
  }
  if (isRepeatedThreeTimes(arrayOfNumbers)) {
    return false;
  }
  return true;
}

function generatePhoneNumber(arrayOfNumbers) {
  if (arrayOfNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (isAValidArray(arrayOfNumbers)) {
    return formatsNumber(arrayOfNumbers);
  }
  return 'não é possível gerar um número de telefone com esses valores';
}

// Challenge 12
function checkLines(line1, line2, line3) {
  if (Math.abs((line1 - line2)) < line3 && line3 < (line1 + line2)) {
    return true;
  }
  return false;
}

function triangleCheck(lineA, lineB, lineC) {
  if (checkLines(lineA, lineB, lineC)
    || checkLines(lineB, lineC, lineA)
    || checkLines(lineC, lineA, lineB)) {
    return true;
  }
  return false;
}

// Challenge 13
// Regex reference:
// https://stackoverflow.com/questions/30607419/return-only-numbers-from-string

function hydrate(string) {
  let numbersOfString = string.replace(/\D/g, '');
  let sumOfStringNumbers = 0;

  for (let index = 0; index < numbersOfString.length; index += 1) {
    sumOfStringNumbers += parseInt(numbersOfString[index], 10);
  }
  if (sumOfStringNumbers > 1) {
    return (`${sumOfStringNumbers} copos de água`);
  }
  return (`${sumOfStringNumbers} copo de água`);
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
