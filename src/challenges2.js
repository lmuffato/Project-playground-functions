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

function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let phoneNumber = '';

  for (let index = 0; index < array.length; index += 1) {
    let number = verifyNumbers(array[index]);
    if (number === undefined) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    phoneNumber += number;
  }

  return formatNumber(phoneNumber);
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
