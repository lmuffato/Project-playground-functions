// Desafio 10
function techList(techName, name) {
  let techListArray = [];
  let techNameOrdened;

  techNameOrdened = techName.length > 0 ? techName.sort() : '';

  for (let i = 0; i < techNameOrdened.length; i += 1) {
    let techListObietc = {
      tech: techNameOrdened[i],
    };
    techListObietc.name = name;
    techListArray.push(techListObietc);
  }
  if (techName.length > 0) {
    return techListArray;
  }
  return 'Vazio!';
}

// Desafio 11
// eslint-disable-next-line sonarjs/cognitive-complexity
function numberRepetition(arrayNumbers) {
  let repeatedNumber = 0;
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    repeatedNumber = 0;
    for (let j = 0; j < arrayNumbers.length; j += 1) {
      if (arrayNumbers[i] === arrayNumbers[j]) {
        repeatedNumber += 1;
      }
    }
    if (repeatedNumber >= 3) {
      break;
    }
  }
  return repeatedNumber;
}

function numberGreaterLimit(arrayNumbers) {
  let biggerNumber = 0;
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] > 9) {
      biggerNumber = arrayNumbers[i];
    }
  }
  return biggerNumber;
}

function generateDdd(arrayNumbers) {
  let ddd = '';
  for (let i = 0; i < 1; i += 1) {
    let num1 = arrayNumbers[i];
    let num2 = arrayNumbers[i + 1];
    ddd = `${num1}${num2}`;
  }
  return ddd;
}

function generateNumber(arrayNumbers) {
  let numberPhone1 = '';
  let numberPhone2 = '';
  for (let i = 2; i < 7; i += 1) {
    numberPhone1 = `${numberPhone1}${arrayNumbers[i]}`;
  }
  for (let j = 7; j < 11; j += 1) {
    numberPhone2 = `${numberPhone2}${arrayNumbers[j]}`;
  }
  return `${numberPhone1}-${numberPhone2}`;
}

function lessThanZero(arrayNumbers) {
  let number = 0;
  for (let i of arrayNumbers) {
    if (i < 0) {
      number = i;
    }
  }
  return number;
}

function generatePhoneNumber(arrayNumbers) {
  let numberTel = '';

  if (arrayNumbers.length > 11) {
    return 'Array com tamanho incorreto.';
  }
  if (numberRepetition(arrayNumbers) >= 3 || lessThanZero(arrayNumbers) < 0) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  if (numberGreaterLimit(arrayNumbers) > 9) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  numberTel = `(${generateDdd(arrayNumbers)}) ${generateNumber(arrayNumbers)}`;

  return numberTel;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

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
