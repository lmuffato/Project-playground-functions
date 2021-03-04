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

// 1 - Descobrir se há repetição na lista.
function verifyDuplicates(numberList) {
  let countNumber = {};
  for (let number in numberList) {
    if (countNumber[numberList[number]]) {
      countNumber[numberList[number]] += 1;
    } else {
      countNumber[numberList[number]] = 1;
    }
  }
  return countNumber;
}

// 2 - Verificar o quantos números se repetem na lista

function countDuplicates(numberList) {
  let counter = verifyDuplicates(numberList);
  for (let number in numberList) {
    if (counter[numberList[number]] >= 3) {
      return true;
    }
  }
}

// 3 - Verificar as outras condições de exclusão

function theExcludentConditions(arrayOfNumbers) {
  for (let key in arrayOfNumbers) {
    if (arrayOfNumbers[key] < 0 || arrayOfNumbers[key] > 9) {
      return true;
    }
  }
}

// 4 - Transformar em string e Formato do número

function phoneNumberFormat(phoneNumber) {
  let messageOne = `(${phoneNumber[0]}${phoneNumber[1]})`;
  let messageTwo = `${phoneNumber[2]}${phoneNumber[3]}${phoneNumber[4]}`;
  let messageThree = `${phoneNumber[5]}${phoneNumber[6]}`;
  let messageFour = `-${phoneNumber[7]}${phoneNumber[8]}${phoneNumber[9]}${phoneNumber[10]}`;
  return messageOne + messageTwo + messageThree + messageFour;
}

function generatePhoneNumber(phoneNumber) {
  if (phoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (theExcludentConditions(phoneNumber)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  if (countDuplicates(phoneNumber) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return phoneNumberFormat(phoneNumber);
}

// Referências utilizadas para resolução do Desafio 11 (sobre laço for...of, toString, repetição de números):
// https://woliveiras.com.br/posts/laços-de-repetição-for-for-in-for-of/
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/toString
// https://stackoverflow.com/questions/19395257/how-to-count-duplicate-value-in-an-array-in-javascript/19395302#19395302
// O código do colega João Nascimento (@nascjoao) ajudou muito a clarear como estruturar as funções 1 e 2 que compõem a resposta do desafio 11.

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
