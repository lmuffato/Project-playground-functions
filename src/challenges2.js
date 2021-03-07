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

function repeatedNumbers(array) {
  for (let index = 0; index < array.length; index += 1) {
    const element = array[index];
    let quantidadeElementos = array.filter((x) => x === element).length;
    if (quantidadeElementos >= 3) {
      return true;
    }
  }
}

// console.log(repeatedNumbers([0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4]));

function generatePhoneNumber(phoneNumber) {
  if (phoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (invalidNumbers(phoneNumber) === true || repeatedNumbers(phoneNumber) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return `(${phoneNumber[0]}${phoneNumber[1]}) ${phoneNumber[2]}${phoneNumber[3]}${phoneNumber[4]}${phoneNumber[5]}${phoneNumber[6]}-${phoneNumber[7]}${phoneNumber[8]}${phoneNumber[9]}${phoneNumber[10]}`;
}

// console.log(generatePhoneNumber([1, 2, 8, 0, 5, 3, 7, 8, 9, 1, 8]));

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
