// Desafio 10
function techList(arrayTechNames, name) {
  let exitArray = [];
  if (arrayTechNames.length > 0) {
    let arraySorted = arrayTechNames.sort();
    for (let index in arraySorted) {
      let insertObj = {};
      insertObj.tech = arraySorted[index];
      insertObj.name = name;
      exitArray.push(insertObj);
    }
  } else {
    return 'Vazio!';
  }
  return exitArray;
}

// Desafio 11
function repeatNumbers(array) {
  for (let index = 0; index < array.length; index += 1) {
    let count = 0;
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      if (array[index] === array[index2]) {
        count += 1;
        if (count >= 3) {
          return true;
        }
      }
    }
  }
  return false;
}

function formatPhoneNumber(phoneNumberString) { // Função copiada de https://stackoverflow.com/questions/8358084/regular-expression-to-reformat-a-us-phone-number-in-javascript, às 19:03, do dia 03/03/2021.
  let cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  let match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return null;
}

function generatePhoneNumber(arrayPhoneNumbers) {
  if (arrayPhoneNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < arrayPhoneNumbers.length; index += 1) {
    if (arrayPhoneNumbers[index] < 0 || arrayPhoneNumbers[index] > 9 || repeatNumbers(arrayPhoneNumbers)) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let phone = arrayPhoneNumbers.join('');
  return formatPhoneNumber(phone);
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (Math.abs(lineB - lineC) < lineA < lineB + lineC
  && Math.abs(lineA - lineC) < lineB < lineA + lineC
  && Math.abs(lineA - lineB) < lineC < lineA + lineB) {
    return true;
  }
  return false;
}
console.log(triangleCheck(10, 14, 8));

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
