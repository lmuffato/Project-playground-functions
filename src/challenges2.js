// Desafio 10
function sorting(a, b) {
  return b.tech > a.tech ? -1 : 1;
}

function techList(array, name) {
  let nameInTheList = name;
  let newArray = [];
  if (array.length === 5) {
    for (let key = 0; key < 5; key += 1) {
      let technologiesList = {
        tech: ' ',
        name: ' ',
      };
      technologiesList.tech = array[key];
      technologiesList.name = nameInTheList;
      newArray[key] = technologiesList;
    }
    return newArray.sort(sorting);
  } if (array.length === 0) {
    return 'Vazio!';
  }
}

// Referência usada para resolver o Desafio 10:
// https://pt.stackoverflow.com/questions/338916/colocando-em-ordem-alfabética-um-array-de-objetos

// Desafio 11

// Dividir a função em problemas menores.

// 1 - Descobrir se há repetição no array.

// function findDuplicates(arrayOfNumbers) {
// let sortedArrayOfNumbers = arrayOfNumbers.slice().sort();
// let results = [];
// let repetition;
// for (let index = 0; index < sortedArrayOfNumbers.length; index += 1) {
// if (sortedArrayOfNumbers[index + 1] === sortedArrayOfNumbers[index]) {
//    return results.push(sortedArrayOfNumbers[index]);
// }
//  if (results.length >= 3) {
//    return repetition === true;
//  }
// }
//  return results && repetition;
// }

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
  if (theExcludentConditions(phoneNumber) === true) {
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
  return false;
}
// 2 - Função pra verificar a relação entre cada lado e a subtração dos outros dois.

function verifySubtraction(lineA, lineB, lineC) {
  let subtractionOfAandB = Math.abs(lineA - lineB); // para lado C
  let subtractionOfAandC = Math.abs(lineA - lineC); // para lado B
  let subtractionOfBandC = Math.abs(lineB - lineC); // para lado A
  if (lineA > subtractionOfBandC && lineB > subtractionOfAandC && lineC > subtractionOfAandB) {
    return true;
  }
  return false;
}

function triangleCheck(lineA, lineB, lineC) {
  if (verifySum(lineA, lineB, lineC) === true && verifySubtraction(lineA, lineB, lineC) === true) {
    return true;
  }
  return false;
}

// Referência utilizada para resolução de Desafio 12:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

// Desafio 13
function hydrateInstructions(sumOfNumbers) {
  let glassOfWater = 'copo de água';
  let glassesOfWater = 'copos de água';
  if (sumOfNumbers > 1) {
    return `${sumOfNumbers} ${glassesOfWater}`;
  }
  if (sumOfNumbers === 1) {
    return `${sumOfNumbers} ${glassOfWater}`;
  }
}

function hydrate(welcomeToTrybePub) {
  for (let key = 0; key < welcomeToTrybePub.length; key += 1) {
    if (welcomeToTrybePub.match(/\d+/g).map(Number)) {
      let numbers = (welcomeToTrybePub.match(/\d+/g).map(Number));
      let sumOfNumbers = numbers.reduce(function (total, num) {
        return parseFloat(total) + parseFloat(num);
      });
      return hydrateInstructions(sumOfNumbers);
    }
  }
}

// Para resolução do Desafio 13, foram consultadas as referências abaixo:
// https://codereview.stackexchange.com/questions/115885/extract-numbers-from-a-string-javascript
// https://javascript.plainenglish.io/javascript-algorithm-calculate-sum-of-numbers-in-a-string-dd007da460b7

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
