// Desafio 10
function techList(array, studentName) {
  let object = [];
  if (array.length === 0) {
    object = 'Vazio!';
  }
  for (let index = 0; index < array.sort().length; index += 1) {
    let techRefer = { tech: array[index], name: studentName };
    object.push(techRefer);
  }
  return object;
}

function indexBiggerLower(array) {
  let indexBigger = 9;
  let indexLower = 0;
  let result = false;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > indexBigger || array[index] < indexLower) {
      result = true;
    }
  }
  return result;
}

function checkEqual(array) {
  let isEqual = 0;
  for (let index = 0; index < array.length; index += 1) {
    for (let index1 = index + 1; index1 < array.length - 1; index1 += 1) {
      if (array[index] === array[index1]) {
        isEqual += 1;
      }
    }
    if (isEqual >= 3) {
      return true;
    }
  }
  return false;
}

// Desafio 11
function generatePhoneNumber(array) {
  let result = '';
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  } if ((indexBiggerLower(array)) === true || (checkEqual(array)) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  for (let index = 0; index < array.length; index += 1) {
    if (index === 0) {
      result += '(';
    } if (index === 2) {
      result += ')';
      result += ' ';
    } if (index === 7) {
      result += '-';
    }
    result += `${array[index]}`;
  }
  return result;
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
