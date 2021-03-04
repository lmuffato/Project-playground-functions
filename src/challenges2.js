// Desafio 10
function techList(techsArray, username) {
  if (techsArray[0] === undefined) {
    return 'Vazio!';
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
console.log(techList([], 'lucas'));

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
  for (let index = 2; index < 7; index += 1) {
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

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let distanceOne = Math.abs(lineA - lineB);
  let distanceTwo = lineA + lineB;
  if (lineC > distanceOne && lineC < distanceTwo) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(phrase) {
  let numbers = phrase.replace(/\D/g, '');
  let sum = 0;
  let result;
  for (let index = 0; index < numbers.length; index += 1) {
    sum += parseInt(numbers[index], 0);
  }
  if (sum === 1) {
    result = '1 copo de água';
  }
  result = `${sum} copos de água`;
  return result;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
