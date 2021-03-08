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
function triangleCheck() {
  // seu código aqui
}

// Challenge 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
