// Desafio 10
function techList() {
}

// Desafio 11

// Dividir a função em problemas menores.

// 1 - Descobrir se há repetição no array.

function findDuplicates(arrayOfNumbers) {
  let sortedArrayOfNumbers = arrayOfNumbers.slice().sort();
  let results = [];
  let repetition;
  for (let index = 0; index < sortedArrayOfNumbers.length; index += 1) {
    if (sortedArrayOfNumbers[index + 1] === sortedArrayOfNumbers[index]) {
      return results.push(sortedArrayOfNumbers[index]);
    }
    if (results.length >= 3) {
      return repetition === true;
    }
  }
  return results && repetition;
}

// 2 - Acessar os valores do array.

function theExcludentConditions(arrayOfNumbers) {
  let excludentConditions = false;
  for (let key of arrayOfNumbers) {
    if (arrayOfNumbers[key] < 0 || arrayOfNumbers[key] > 9) {
      return excludentConditions === true;
    }
  }
}

// 3 - Transformar em string.

function convertArrayToString(arrayOfNumbers, firstIndex, secondIndex) {
  let result = ' ';

  for (let index = firstIndex; index <= secondIndex; index += 1) {
    result += arrayOfNumbers[index].toString();
  }
  return result;
}

function generatePhoneNumber(phoneNumber) {
  let message = ' ';
  if (phoneNumber.length !== 11) {
    message = 'Array com tamanho incorreto.';
  }
  if (theExcludentConditions(phoneNumber) === true || findDuplicates(phoneNumber) === true) {
    message = 'não é possível gerar um número de telefone com esses valores';
  } else {
    message += `(${convertArrayToString(phoneNumber, 0, 1)}) `;
    message += `${convertArrayToString(phoneNumber, 2, 6)}-`;
    message += `${convertArrayToString(phoneNumber, 7, 10)}`;
  }
  return message;
}

// Referências utilizadas para resolução do Desafio 11 (sobre laço for...of, toString, repetição de números):
// https://woliveiras.com.br/posts/laços-de-repetição-for-for-in-for-of/
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/toString
// https://stackoverflow.com/questions/19395257/how-to-count-duplicate-value-in-an-array-in-javascript/19395302#19395302

// Desafio 12

// Dividir em duas outras funções mais simples

// 1 - Função que verifica a relação entre cada lado e a soma dos outros dois lados do triângulo.

function verifySum(lineA, lineB, lineC) {
  let sumOfAandB = lineA + lineB; // para lado C
  let sumOfAandC = lineA + lineC; // para lado B
  let sumOfCandB = lineB + lineC; // para lado A

  if (lineA < sumOfCandB && lineB < sumOfAandC && lineC < sumOfAandB) {
    return true;
  }
}

// 2 - Função pra verificar a relação entre cada lado e a subtração dos outros dois.

function verifySubtraction(lineA, lineB, lineC) {
  let subtractionOfAandB = Math.abs(lineA - lineB); // para lado C
  let subtractionOfAandC = Math.abs(lineA - lineC); // para lado B
  let subtractionOfBandC = Math.abs(lineB - lineC); // para lado A
  if (lineA > subtractionOfBandC && lineB > subtractionOfAandC && lineC > subtractionOfAandB) {
    return true;
  }
}

function triangleCheck(lineA, lineB, lineC) {
  let triangleVerify = false;
  if (verifySum(lineA, lineB, lineC) === true && verifySubtraction(lineA, lineB, lineC) === true) {
    return triangleVerify === true;
  }
}
// Referência utilizada para resolução de Desafio 12:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

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
