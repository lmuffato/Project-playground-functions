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

function repeatedNumbers(Numbers) {
  let counter = 0;
  for (let index = 0; index < Numbers.length; index += 1) {
    for (let index2 = 1; index2 < Numbers.length; index2 += 1) {
      if (Numbers[index] === Numbers[index2]) {
        counter += 1;
        if (counter >= 3) {
          return true;
        }
      }
    }
  }
}

console.log(repeatedNumbers([1, 2, 8, 0, 5, 3, 7, 8, 9, 1, 8]));

function generatePhoneNumber(phoneNumber) {
  if (phoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (invalidNumbers(phoneNumber) === true || repeatedNumbers(phoneNumber) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return `(${phoneNumber[0]}${phoneNumber[1]}) ${phoneNumber[2]}${phoneNumber[3]}${phoneNumber[4]}${phoneNumber[5]}${phoneNumber[6]}-${phoneNumber[7]}${phoneNumber[8]}${phoneNumber[9]}${phoneNumber[10]}`;
}

console.log(generatePhoneNumber([1, 2, 8, 0, 5, 3, 7, 8, 9, 1, 8]));

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
