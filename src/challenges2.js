// Desafio 10
function techList(techsArray, username) {
  if (techsArray === undefined) {
    return 'Vazio!'
  }
  let techsArraySorted = techsArray.sort();
  let arrayObjectTechs = [];
  for (let index = 0; index < techsArraySorted.length; index += 1) {
    let objectTechs = {
      tech: techsArraySorted[index],
      name: username,
    };
    arrayObjectTechs.push(objectTechs);
  }
  return arrayObjectTechs;
}
console.log(techList());

function countNumber(array, number) {
  let count = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === number) {
      count += 1;
    }
  }
  return count;
}

function validatePhoneNumber(array) {
  for (let index = 0; index < array.length; index += 1) {
    let number = array[index];
    if ((countNumber(array, number)) >= 3 || number < 0 || number > 9) {
      return false;
    }
  }
  return true;
}

function phoneGenerator(array) {
  let phoneNumber = [];
  phoneNumber.push('(');
  for (let index = 0; index < 2; index += 1) {
    phoneNumber.push(array[index]);
  }
  phoneNumber.push(') ');
  for (let index = 2; index < 6; index += 1) {
    phoneNumber.push(array[index]);
  }
  phoneNumber.push('-');
  for (let index = 7; index < array.length; index += 1) {
    phoneNumber.push(array[index]);
  }
  return phoneNumber.join('');
}

// Desafio 11
function generatePhoneNumber(arrayPhoneNumber) {
  if (arrayPhoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (validatePhoneNumber(arrayPhoneNumber)) {
    let phone = phoneGenerator(arrayPhoneNumber);
    return phone;
  }
  return 'não é possível gerar um número de telefone com esses valores';
}
console.log(generatePhoneNumber([2, 2, 1, 4, 5, 6, 7, 8, 9, 0, 2]));

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
