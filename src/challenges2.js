// Desafio 10
function sortTechListArray(array) {
  /* https://pt.stackoverflow.com/questions/46600/  como-ordenar-uma-array-de-objetos-com-array-sort */
  return array.sort((firsItem, secondItem) => {
    if (firsItem.tech < secondItem.tech) return -1;
    if (firsItem.tech > secondItem.tech) return 1;
    return 0;
  });
}

function techList(arrayOfTechs, name) {
  let outputArray = [];
  if (arrayOfTechs.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < arrayOfTechs.length; index += 1) {
    let tech = arrayOfTechs[index];
    outputArray.push({ tech, name });
  }
  return sortTechListArray(outputArray);
}

// Desafio 11
function checkArrayLength(array) {
  if (array.length !== 11) return 'Array com tamanho incorreto';
  return true;
}

function checkArrayNumbers(array) {
  let maxNumber = 9;
  let error = 'não é possível gerar um número de telefone com esses valores';
  for (let number of array) {
    if (number > maxNumber || number < 0) return error;
  }
  return true;
}
/* https://stackoverflow.com/questions/49215358/checking-for-duplicate-strings-in-javascript-array */
function checkRepeatedNumbers(array) {
  let repeatedNumbers = {};
  let error = 'não é possível gerar um número de telefone com esses valores';
  array.forEach((index) => {
    repeatedNumbers[index] = (repeatedNumbers[index] || 0) + 1;
  });
  for (let key in repeatedNumbers) {
    if (repeatedNumbers[key] >= 3) return error;
  }
  return true;
}

function throwError(length, repeated, maxNumber) {
  if (length !== true) return length;
  if (repeated !== true) return repeated;
  if (maxNumber !== true) return maxNumber;
}
/* https://stackoverflow.com/questions/8358084/regular-expression-to-reformat-a-us-phone-number-in-javascript */
function generatePhoneNumber(phoneNumberArray) {
  let isLengthCorrect = checkArrayLength(phoneNumberArray);
  let isRepeatedNumbersCorrect = checkRepeatedNumbers(phoneNumberArray);
  let isMaxNumberCorrect = checkArrayNumbers(phoneNumberArray);
  let phoneString = phoneNumberArray.toString().replace(/\D/g, '');
  if (typeof isLengthCorrect && isRepeatedNumbersCorrect && isMaxNumberCorrect === Boolean) {
    return phoneString.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }
  return throwError(isLengthCorrect, isRepeatedNumbersCorrect, isMaxNumberCorrect);
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
