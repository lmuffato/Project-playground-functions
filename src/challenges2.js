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

let array = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
let name = 'Lucas';
console.log(techList(array, name));

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

// Returns true if any number is repeated three times.

function generatePhoneNumber(arrayOfNumbers) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (isAValidArray(arrayOfNumbers)) {
    return formatsNumber(arrayOfNumbers);
  }
  return 'não é possível gerar um número de telefone com esses valores';
}

// Returns true if the array is valid.

array = [1, 2, 3, 6, 6, 6, 7, 8, 9, 1, 2];
console.log(generatePhoneNumber(array));

// Caso algum dos números da array seja menor que 0, maior que 9 ou se repita 3 vezes ou mais, `generatePhoneNumber` deverá retornar a string `"não é possível gerar um número de telefone com esses valores"`.

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
