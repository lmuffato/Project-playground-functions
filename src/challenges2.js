// Desafio 10
function techList(techArray, name) {
  let result;
  if (techArray.length > 0) {
    techArray = techArray.sort();
    let objectArray = [];
    for (let index = 0; index < techArray.length; index += 1) {
      let object = { tech: techArray[index], name };
      objectArray.push(object);
    }
    result = objectArray;
  } else {
    result = 'Vazio!';
  }
  return result;
}

// Desafio 11
// Definindo funções a serem utilizadas na generatePhoneNumber()
function arrayLengthValidation(array) {
  return array.length === 11;
}

function arrayNumericalValidation(array) {
  for (let value of array) {
    if (value < 0 || value > 9) {
      return false;
    }
  }
  return true;
}

function arrayRepeatValidation(array, maxRepetitions) {
  // Checa se o array tem numeros se repetindo x vezes ou mais
  let result = true;
  let numberCount = {};
  for (let index of array) {
    if (index in numberCount) {
      numberCount[index] += 1;
      if (numberCount[index] === maxRepetitions) {
        result = false;
        break;
      }
    } else {
      numberCount[index] = 1;
    }
  }
  return result;
}

function generatePhoneNumber(numberArray) {
// Perform validations
  let result;

  if (!arrayLengthValidation(numberArray)) {
    result = 'Array com tamanho incorreto.';
  } else if (!arrayNumericalValidation(numberArray) || !arrayRepeatValidation(numberArray, 3)) {
    result = 'não é possível gerar um número de telefone com esses valores';
  } else {
    let ddd = numberArray.slice(0, 2).join('');
    result = `(${ddd}) ${numberArray.slice(2, 7).join('')}-${numberArray.slice(7, 11).join('')}`;
  }
  return result;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // é necessário que a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois
  // e maior que o valor absoluto da diferença entre essas medidas.
  let isTriangle;
  if (lineA >= lineB + lineC || lineB >= lineA + lineC || lineC >= lineB + lineA) {
    isTriangle = false;
  } else if (lineA <= Math.abs(lineB - lineC) || lineB <= Math.abs(lineA - lineC) || lineC <= Math.abs(lineB - lineA)) {
    isTriangle = false;
  } else {
    isTriangle = true;
  }
  return isTriangle;
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
