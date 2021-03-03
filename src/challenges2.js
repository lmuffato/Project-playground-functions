// Desafio 10
// Link utilizado para estudo na realização deste desafio:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function techList(techArray, studentName) {
  let output = [];
  for (let tech = 0; tech < techArray.sort().length; tech += 1) {
    const techObject = { tech: techArray[tech], name: studentName };
    output.push(techObject);
  }
  if (techArray.length === 0) {
    output = 'Vazio!';
  }
  return output;
}

// Desafio 11
function arrayDoesNotFit(arrayOfNumbers) {
  if (arrayOfNumbers.length === 11) {
    return false;
  }
  return true;
}
function numberIsNotValid(arrayOfNumbers) {
  for (let number in arrayOfNumbers) {
    if (arrayOfNumbers[number] < 0 || arrayOfNumbers[number] > 9) {
      return true;
    }
  }
  return false;
}
function numbersCounter(arrayOfNumbers) {
  let counter = {};
  for (let number in arrayOfNumbers) {
    if (counter[arrayOfNumbers[number]]) {
      counter[arrayOfNumbers[number]] += 1;
    } else {
      counter[arrayOfNumbers[number]] = 1;
    }
  }
  return counter;
}
function numbersRepeat(arrayOfNumbers) {
  const count = numbersCounter(arrayOfNumbers);
  for (let number in arrayOfNumbers) {
    if (count[arrayOfNumbers[number]] >= 3) {
      return true;
    }
  }
  return false;
}
function toDdd(arrayOfNumbers) {
  let ddd = '(';
  for (let number = 0; number < arrayOfNumbers[1]; number += 1) {
    const currentNumber = arrayOfNumbers[number];
    if (currentNumber === arrayOfNumbers[1]) {
      ddd += `${currentNumber})`;
    } else {
      ddd += currentNumber;
    }
  }
  return ddd;
}
function toFirstPart(arrayOfNumbers) {
  let firstPart = ' ';
  for (let number = 2; number < (arrayOfNumbers.length - 4); number += 1) {
    const currentNumber = arrayOfNumbers[number];
    firstPart += currentNumber;
  }
  return firstPart;
}
function toSecondPart(arrayOfNumbers) {
  let secondPart = '-';
  for (let number = 7; number < arrayOfNumbers.length; number += 1) {
    const currentNumber = arrayOfNumbers[number];
    secondPart += currentNumber;
  }
  return secondPart;
}
function generatePhoneNumber(arrayOfNumbers) {
  const array = arrayOfNumbers;
  if (arrayDoesNotFit(array)) {
    return 'Array com tamanho incorreto.';
  }
  if (numberIsNotValid(array) || numbersRepeat(array)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return toDdd(array) + toFirstPart(array) + toSecondPart(array);
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
