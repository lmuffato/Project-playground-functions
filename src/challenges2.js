// Desafio 10
function techList(namesTech, name) {
  let listTech = [];
  if (namesTech.length === 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < namesTech.length; i += 1) {
    let listTechItem = {
      tech: namesTech[i],
      name,
    };
    listTech.push(listTechItem);
  }
  listTech.sort((a, b) => a.tech.localeCompare(b.tech));
  return listTech;
}

// Desafio 11
function checkPhoneSize(phoneNumbers) {
  return phoneNumbers.length === 11;
}

function checkNumberIsPositiveOrMoreNine(phoneNumbers) {
  for (let i = 0; i < phoneNumbers.length; i += 1) {
    if (phoneNumbers[i] < 0 || phoneNumbers[i] > 9) {
      return false;
    }
  }
  return true;
}

function checkNumberRepeatAux(phoneNumbers, index) {
  let result = 1;
  for (let j = 0; j < index; j += 1) {
    if (phoneNumbers[index] === phoneNumbers[j]) {
      result += 1;
    }
  }
  return result;
}

function checkNumberRepeat(phoneNumbers) {
  let repeat = 0;
  for (let i = 0; i < phoneNumbers.length; i += 1) {
    repeat = 0;
    repeat += checkNumberRepeatAux(phoneNumbers, i);
    if (repeat > 2) {
      return false;
    }
  }
  return true;
}

function validatedPhone(phoneNumbers) {
  if (!checkPhoneSize(phoneNumbers)) {
    return 'Array com tamanho incorreto.';
  }
  if (!checkNumberIsPositiveOrMoreNine(phoneNumbers) || !checkNumberRepeat(phoneNumbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return true;
}

function formatNumberPhoneDDD(numberFormat) {
  if (numberFormat.length === 0) {
    return '(';
  }
  if (numberFormat.length === 3) {
    return ')';
  }
  return '';
}

function formatNumberGeneral(numberFormat) {
  if (numberFormat.length === 4) {
    return ' ';
  }
  if (numberFormat.length === 10) {
    return '-';
  }
  return '';
}

function generatePhoneNumber(phoneNumbers) {
  let valid = validatedPhone(phoneNumbers);
  let numberFormat = '';
  if (valid !== true) {
    return valid;
  }
  for (let i = 0; i < phoneNumbers.length; i += 1) {
    numberFormat += formatNumberPhoneDDD(numberFormat);
    numberFormat += formatNumberGeneral(numberFormat);
    numberFormat += phoneNumbers[i];
  }
  return numberFormat;
}

// Desafio 12
function checkLinesSize(lineA, lineB, lineC) {
  return lineA < (lineB + lineC) && lineB < (lineA + lineC) && lineC < (lineA + lineB);
}

function checkLinesSizeAbsolut(lineA, lineB, lineC) {
  let lineAValidate = lineA > Math.abs(lineB - lineC);
  let lineBValidate = lineB < Math.abs((lineA + lineC));
  let lineCValidate = lineC < Math.abs(lineA + lineB);
  return lineAValidate && lineBValidate && lineCValidate;
}

function triangleCheck(lineA, lineB, lineC) {
  return checkLinesSize(lineA, lineB, lineC) && checkLinesSizeAbsolut(lineA, lineB, lineC);
}

// Desafio 13
// créditos do código https://stackoverflow.com/questions/42532450/extract-number-from-string-javascript
function hydrate(phrase) {
  const result = (phrase.match(/\d+/g) || []).map((n) => parseInt(n, 9));
  let countNumber = 0;
  for (let i = 0; i < result.length; i += 1) {
    countNumber += result[i];
  }
  return countNumber === 1 ? `${countNumber} copo de água` : `${countNumber} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
