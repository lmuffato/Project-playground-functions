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
  if (array.length !== 11) return false;
  return true;
}

function checkArrayNumbers(array) {
  let maxNumber = 9;
  for (let number of array) {
    if (number > maxNumber || number < 0) return false;
  }
  return true;
}
/* https://stackoverflow.com/questions/49215358/checking-for-duplicate-strings-in-javascript-array */
function checkRepeatedNumbers(array) {
  let repeatedNumbers = {};
  array.forEach((index) => {
    repeatedNumbers[index] = (repeatedNumbers[index] || 0) + 1;
  });
  for (let key in repeatedNumbers) {
    if (repeatedNumbers[key] >= 3) return false;
  }
  return true;
}

function throwError(length, repeated, maxNumber) {
  if (length !== true) return 'Array com tamanho incorreto.';
  if (repeated !== true) return 'não é possível gerar um número de telefone com esses valores';
  if (maxNumber !== true) return 'não é possível gerar um número de telefone com esses valores';
}
/* https://stackoverflow.com/questions/8358084/regular-expression-to-reformat-a-us-phone-number-in-javascript */
function generatePhoneNumber(phoneNumberArray) {
  let isLengthCorrect = checkArrayLength(phoneNumberArray);
  let isRepeatedNumbersCorrect = checkRepeatedNumbers(phoneNumberArray);
  let isMaxNumberCorrect = checkArrayNumbers(phoneNumberArray);
  let phoneString = phoneNumberArray.toString().replace(/\D/g, '');
  if (isLengthCorrect && isRepeatedNumbersCorrect && isMaxNumberCorrect) {
    return phoneString.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }
  return throwError(isLengthCorrect, isRepeatedNumbersCorrect, isMaxNumberCorrect);
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1]));
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
