// Desafio 10
function techList(techArray, name) {
  if (techArray.length === 0) {
    return 'Vazio!';
  }

  let techObjects = [];
  techArray.sort();

  for (let index = 0; index < techArray.length; index += 1) {
    let obj = {
      tech: techArray[index],
      name,
    };
    techObjects.push(obj);
  }
  return techObjects;
}

// Desafio 11
function repeatedCount(number, numbersArray, error) {
  const { bool } = error;
  let count = 0;

  if (bool) {
    return error;
  }
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (number === numbersArray[index]) {
      count += 1;
    }
  }
  if (count >= 3) {
    return {
      bool: true,
      msg: 'não é possível gerar um número de telefone com esses valores',
    };
  }
  return { bool: false, msg: '' };
}

function phoneNumberError(numbersArray) {
  let error = { bool: null, msg: null };
  if (numbersArray.length !== 11) {
    error.bool = true;
    error.msg = 'Array com tamanho incorreto.';
    return error;
  }

  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] < 0 || numbersArray[index] > 9) {
      error.bool = true;
      error.msg = 'não é possível gerar um número de telefone com esses valores';
      return error;
    }
    error = repeatedCount(numbersArray[index], numbersArray, error);
  }
  return error;
}

function generatePhoneNumber(numbersArray) {
  const { bool, msg } = phoneNumberError(numbersArray);
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
  if (bool) return msg;

  let ddd = '';
  let number = '';
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (index < 2) {
      ddd += numbersArray[index];
    } else {
      number += numbersArray[index];
    }
  }
  // https://www.w3schools.com/jsref/jsref_substring.asp
  let firstPart = number.substring(0, 5);
  let secondPart = number.substring(5);
  return `(${ddd})${firstPart}-${secondPart}`;
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
