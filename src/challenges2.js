// Desafio 10
function techList() {
  
}

// Desafio 11

// Dividir a função em problemas menores. 

// 1 - Descobrir se há repetição no array.

function findRepetition (arrayOfNumbers) {  
  let numbersInRepetition = {};
  let repeatedNumbers = false;

  for (let key of arrayOfNumbers) {
    numbersInRepetition[key] = 0;
  }
  for (let key of arrayOfNumbers) {
    numbersInRepetition += 1;
  }
  for (let key in numbersInRepetition) {
    if (numbersInRepetition[key] >= 3) {
      repeatedNumbers === true;
    }
  }
  return repeatedNumbers;
 }


// 2 - Acessar os valores do array.

function theExcludentConditions (arrayOfNumbers) {
  let excludentConditions = false;
  for (let key of arrayOfNumbers) {
    if(arrayOfNumbers[key] < 0 || arrayOfNumbers[key] > 9) {
      excludentConditions === true;
    }
  }
  return excludentCondition;
}

// 3 - Transformar em string.

function convertArrayToString (arrayOfNumbers, firstIndex, secondIndex) {
  let result = ' ';

  for (let index = firstIndex; index <= secondIndex; index += 1) {
    result += arrayOfNumbers[index].toString();
  }
  return result;
}

function generatePhoneNumber(phoneNumber) {
 
  let message = ' ';
  phoneNumber.length === 11;

    if (phoneNumber.length != 11) {
      message = 'Array com tamanho incorreto.';
    }
    else if (theExcludentConditions(phoneNumber) === true || findRepetition(phoneNumber) === true) {
      message = 'não é possível gerar um número de telefone com esses valores'; 
    } else {
      message += `(${convertArrayToString(phoneNumber, 0, 1)}) `;
      message += `${convertArrayToString(phoneNumber, 2, 6)}-`;
      message += `${convertArrayToString(phoneNumber, 7,10)}`;
    }
  return message;
}

// Referências utilizadas para resolução do Desafio 11 (sobre laço for...of, toString, repetição de números):
// https://woliveiras.com.br/posts/laços-de-repetição-for-for-in-for-of/
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/toString
// https://stackoverflow.com/questions/19395257/how-to-count-duplicate-value-in-an-array-in-javascript/19395302#19395302 


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
