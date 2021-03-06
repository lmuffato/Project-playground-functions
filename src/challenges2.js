// Desafio 10
function techList(techNames, personName) {
  let techNamesSorted;
  let techObjects;
  if (techNames.length !== 0) {
    techObjects = [];
    techNamesSorted = techNames.sort();
    for (let index = 0; index < techNamesSorted.length; index += 1) {
      let techObject = { tech: techNamesSorted[index], name: personName };

      techObjects.push(techObject);
    }
  } else {
    techObjects = 'Vazio!';
  }
  return techObjects;
}

// Desafio 11
function checkLength(numbers) {
  if (numbers.length !== 11) {
    return true;
  }
}

function checkNumberRange(numbers) {
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9) {
      return true;
    }
  }
}

function checkRepeatThreeTimes(numbers) {
  for (let index = 0; index < numbers.length; index += 1) {
    let count = 0;
    let number = numbers[index];
    for (let innerIndex = 0; innerIndex < numbers.length; innerIndex += 1) {
      if (numbers[innerIndex] === number) {
        count += 1;
      }
    }
    if (count >= 3) {
      return true;
    }
  }
}

function checkError(numbers) {
  switch (true) {
  case checkLength(numbers):
    return 'Array com tamanho incorreto.';
  case checkNumberRange(numbers) || checkRepeatThreeTimes(numbers):
    return 'não é possível gerar um número de telefone com esses valores';
  default:
    return '';
  }
}

function phoneNumberStandard(numbers) {
  let phoneNumber = '(';
  for (let index = 0; index < 2; index += 1) {
    /** Source: https://www.w3schools.com/jsref/jsref_tostring_number.asp */
    phoneNumber += numbers[index].toString();
  }
  phoneNumber += ') ';
  for (let index = 2; index < 7; index += 1) {
    phoneNumber += numbers[index].toString();
  }
  phoneNumber += '-';
  for (let index = 7; index < 11; index += 1) {
    phoneNumber += numbers[index].toString();
  }

  return phoneNumber;
}

function generatePhoneNumber(numbers) {
  let errorInfo = '';
  let finalMessage = '';
  errorInfo = checkError(numbers);
  if (errorInfo === '') {
    finalMessage = phoneNumberStandard(numbers);
  } else {
    finalMessage = errorInfo;
  }
  return finalMessage;
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
