// Desafio 10
function techList(stringArray, nameObject) {
  let arrayObjects = [0];
  for (let index = 0; index < stringArray.length; index += 1) {
    let objects = {
      tech: stringArray[index],
      name: nameObject,
    };
    arrayObjects[index] = objects;
  }
  if (arrayObjects.length >= 5) {
    arrayObjects.sort(function (a, b) { // Entrei no MDN para entender sobre o comando sort de array, e lá tem essa explicação de como ordenar objetos.
      if (a.tech > b.tech) {
        return 1;
      }
      if (a.tech < b.tech) {
        return -1;
      }
      return 0;
    });
    return arrayObjects;
  } if (arrayObjects.tech === undefined) {
    return 'Vazio!';
  }
}

// Desafio 11
function getNumberArray(value) {
  let arrayNumber = [];
  let numberCheck = value.length;
  if (numberCheck !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < value.length; index += 1) {
    arrayNumber.push(value[index]);
  }
  return arrayNumber;
}

function numberCheckCorrect(numberArray) {
  let checkNumber = [];
  for (let index = 0; index < numberArray.length; index += 1) {
    checkNumber[index] = numberArray[index];
    if (checkNumber[index] < 0 || checkNumber[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return checkNumber;
}

function numberRepeater(numberArray) {
  let numberCheckRepeat = 0;
  for (let index = 0; index < numberArray.length; index += 1) {
    let checkNumber = numberArray[index];
    for (let checklIndex = 0; checklIndex < checkNumber.length; checklIndex += 1) {
      let checkedNumber = checkNumber[index];
      if (checkedNumber === checkNumber) {
        numberCheckRepeat += 1;
      }
    }
  }
  return numberCheckRepeat;
}

function generatePhoneNumber(arrayPhone) {
  let telephoneNumber = getNumberArray(arrayPhone);
  telephoneNumber = numberCheckCorrect(telephoneNumber);
  return telephoneNumber;
}
console.log(numberRepeater([1, 1, 2, 3, 4, 6]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function checkValueA(lineA, lineB, lineC) {
  let lineCheck = lineA;
  let somaCheck = lineB + lineC;
  let absoluteCheck = Math.abs(lineA - somaCheck);
  if (lineCheck < somaCheck && lineCheck > absoluteCheck) {
    return true;
  }
  return false;
}

function checkValueB(lineA, lineB, lineC) {
  let lineCheck = lineB;
  let somaCheck = lineA + lineC;
  let absoluteCheck = Math.abs(lineB - somaCheck);
  if (lineCheck < somaCheck && lineCheck > absoluteCheck) {
    return true;
  }
  return false;
}

function checkValueC(lineA, lineB, lineC) {
  let lineCheck = lineC;
  let somaCheck = lineA + lineB;
  let absoluteCheck = Math.abs(lineC - somaCheck);
  if (lineCheck < somaCheck && lineCheck > absoluteCheck) {
    return true;
  }
  return false;
}

function triangleCheck(lineA, lineB, lineC) {
  let valueA = checkValueA(lineA, lineB, lineC);
  let valueB = checkValueB(lineA, lineB, lineC);
  let valueC = checkValueC(lineA, lineB, lineC);
  if (valueA === true || valueB === true || valueC === true) {
    return true;
  }
  return false;
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
