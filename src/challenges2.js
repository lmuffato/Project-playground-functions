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
  let result = 0;
  for (let j = 0; j < index; j += 1) {
    result += (phoneNumbers[index] === phoneNumbers[j]) ? 1 : 0;
  }
  return result;
}

function checkNumberRepeat(phoneNumbers) {
  let repeat = 0;
  for (let i = 0; i < phoneNumbers.length; i += 1) {
    repeat += checkNumberRepeatAux(phoneNumbers, i);
    if (repeat >= 3) {
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
