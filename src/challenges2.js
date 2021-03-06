// Desafio 10
function techList(array, yourName) {
  let result = [];
  let object = {
    tech: '',
    name: yourName,
  };
  if (array.length === 0) {
    return 'Vazio!';
  }
  array.sort();
  for (let index = 0; index < array.length; index += 1) {
    object = {
      tech: array[index],
      name: yourName,
    };
    result.push(object);
  }
  return result;
}

// Desafio 11
function invalidNumbers(arrayNumbers) {
  for (let number of arrayNumbers) {
    if (number < 0 || number > 9) {
      return true;
    }
  }
}

function repeatedNumbers(arrayNumbers) {
  let counter = [];
  for (let index of arrayNumbers) {
    if (arrayNumbers[index] === index) {
      counter.push(index);
    }
    if (counter.length >= 3) {
      return true;
    }
  }
}

function generatePhoneNumber(phoneNumber) {
  if (phoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (invalidNumbers(phoneNumber) === true || repeatedNumbers(phoneNumber) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return `(${phoneNumber[0]}${phoneNumber[1]})${phoneNumber[2]} 
  ${phoneNumber[3]} ${phoneNumber[4]} ${phoneNumber[5]}-
  ${phoneNumber[6]} ${phoneNumber[7]} ${phoneNumber[8]} 
  ${phoneNumber[9]} ${phoneNumber[10]}`;
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
