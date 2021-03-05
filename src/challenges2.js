// Desafio 10
function objectCreator(array, names) {
  let arrayObjects = [0];
  for (let index = 0; index < array.length; index += 1) {
    let objects = {
      tech: array[index],
      name: names,
    };
    arrayObjects[index] = objects;
  }
  return arrayObjects;
}

function sortList(a, b) {
  if (a.tech > b.tech) {
    return 1;
  }
  if (a.tech < b.tech) {
    return -1;
  }
  return 0;
}

function arrangeArray(arrayObjects) {
  if (arrayObjects.length >= 5) {
    arrayObjects.sort(sortList);
    return arrayObjects;
  } if (arrayObjects.tech === undefined) {
    return 'Vazio!';
  }
}

function techList(stringArray, nameObject) {
  let arrayObjects = objectCreator(stringArray, nameObject);
  arrayObjects = arrangeArray(arrayObjects);
  return arrayObjects;
}

// Desafio 11
function getNumberArray(value) {
  let arrayNumber = [];
  let numberCheck = value.length;
  if (numberCheck !== 11) {
    return false;
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
      return false;
    }
  }
  return true;
}

function numberRepeater(numberArray) {
  let numberCheckRepeat = 0;
  for (let index = 0; index < numberArray.length; index += 1) {
    let checkNumber = numberArray[index];
    for (let checklIndex = 0; checklIndex < index; checklIndex += 1) {
      if (checkNumber === numberArray[checklIndex]) {
        numberCheckRepeat += 1;
        } if (numberCheckRepeat >= 3) {
        return false;
      }
    }
    if (numberCheckRepeat >= 2){
      numberCheckRepeat = 0;
    }
  }
  return true;
}

function changeForTelephone(n) {
  let changeNumberA = `(${n[0]}${n[1]}) ${n[2]}${n[3]}${n[4]}${n[5]}${n[6]}`;
  let changeNumberB = `-${n[7]}${n[8]}${n[9]}${n[10]}`;
  let changeTotal = changeNumberA + changeNumberB;
  return changeTotal;
}

function generatePhoneNumber(arrayPhone) {
  let telephoneNumber = getNumberArray(arrayPhone);
  if (getNumberArray(telephoneNumber) === false) {
    return 'Array com tamanho incorreto.';
  }
  if (numberCheckCorrect(telephoneNumber) === false || numberRepeater(telephoneNumber) === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  telephoneNumber = changeForTelephone(telephoneNumber);
  return telephoneNumber;
}
console.log(generatePhoneNumber([0, 2, 4, 2, 5, 5, 6, 8, 9, 2, 1]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
console.log(generatePhoneNumber([5, 2, 8, 1, 5, 3, 7, 2, 8, 9, 0]));
console.log(generatePhoneNumber([8, 2, 3, 6, 5, 3, 6, 2, 8, 9, 0]));

// Desafio 12
function checkValueA(lineA, lineB, lineC) {
  let lineCheck = lineA;
  let somaCheck = lineB + lineC;
  let absoluteCheck = Math.abs(lineB - lineC);
  if (lineCheck < somaCheck && lineCheck > absoluteCheck) {
    return true;
  }
  return false;
}

function checkValueB(lineA, lineB, lineC) {
  let lineCheck = lineB;
  let somaCheck = lineA + lineC;
  let absoluteCheck = Math.abs(lineA - lineC);
  if (lineCheck < somaCheck && lineCheck > absoluteCheck) {
    return true;
  }
  return false;
}

function checkValueC(lineA, lineB, lineC) {
  let lineCheck = lineC;
  let somaCheck = lineA + lineB;
  let absoluteCheck = Math.abs(lineB - lineA);
  if (lineCheck < somaCheck && lineCheck > absoluteCheck) {
    return true;
  }
  return false;
}

function triangleCheck(lineA, lineB, lineC) {
  let valueA = checkValueA(lineA, lineB, lineC);
  let valueB = checkValueB(lineA, lineB, lineC);
  let valueC = checkValueC(lineA, lineB, lineC);
  if (valueA === true && valueB === true && valueC === true) {
    return true;
  }
  return false;
}

// Desafio 13
function changeStringInArray(string) {
  let stringChange = string.replace(/\D/g, '');
  stringChange = stringChange.split('');
  for (let index = 0; index < stringChange.length; index += 1) {
    stringChange[index] = Number(stringChange[index]);
  }
  return stringChange;
}

function arraySum(arrayValue) {
  let arrayNumbers = arrayValue;
  let summArray = 0;

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    summArray += arrayNumbers[index];
  }
  return summArray;
}

function hydrate(string) {
  let arrayNumbers = changeStringInArray(string);
  arrayNumbers = arraySum(arrayNumbers);
  if (arrayNumbers === 1) {
    return `${arrayNumbers} copo de água`;
  }
  return `${arrayNumbers} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
