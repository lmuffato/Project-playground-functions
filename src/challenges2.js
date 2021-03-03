// Desafio 10
function techList(array, string) {
  array.sort();
  let tecnologies = [];

  if (array.length === 0) {
    return 'Vazio!';
  }

  for (let index = 0; index < array.length; index += 1) {
    tecnologies.push(
      {
        tech: array[index],
        name: string,
      },
    );
  }

  return tecnologies;
}

// Desafio 11
function verifyNumbers(number) {
  if (number <= 9 && number >= 0) {
    return number;
  }
}

function formatNumber(string) {
  let formatedNumber = '(';
  formatedNumber += string.slice(0, 2);
  formatedNumber += ') ';
  formatedNumber += string.slice(2, 7);
  formatedNumber += '-';
  formatedNumber += string.slice(7, 11);

  return formatedNumber;
}

function checkRepeat(array, number) {
  let checkCounter = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (number === array[index]) {
      checkCounter += 1;
    }
  }
  return checkCounter;
}

function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let phoneNumber = '';

  for (let index = 0; index < array.length; index += 1) {
    let number = verifyNumbers(array[index]);
    let counter = checkRepeat(array, number);
    if (number === undefined || counter >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    phoneNumber += number;
  }

  return formatNumber(phoneNumber);
}

// console.log(generatePhoneNumber([0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 5]))

// Desafio 12
function sumCheck(a, b, c) {
  if (a < b + c && b < a + c && c < a + b) {
    return true;
  }
  return false;
}

function subtractionCheck(a, b, c) {
  let checkA = Math.abs(b - c);
  let checkB = Math.abs(a - c);
  let checkC = Math.abs(a - b);

  if (a < checkA && b < checkB && c < checkC) {
    return false;
  }
}

function triangleCheck(array) {
  let sideA = array[0];
  let sideB = array[1];
  let sideC = array[2];

  if (sumCheck(sideA, sideB, sideC) === false) {
    return false;
  }
  if (subtractionCheck(sideA, sideB, sideC) === false) {
    return false;
  }

  return true;
}

console.log(triangleCheck([10, 14, 8]));
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
