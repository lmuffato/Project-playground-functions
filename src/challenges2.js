// Desafio 10
function techList(arr, name) {
  let nam = name;
  let orgarr = arr.sort();
  let techsNames = [];
  for (let index = 0; index < orgarr.length; index += 1) {
    techsNames.push(
      {
        tech: orgarr[index],
        name: nam,
      },
    );
  }

  if (arr.length === 0) {
    return 'Vazio!';
  }
  return techsNames;
}

// Desafio 11
function generatePhoneNumber(arr) {
  if (arr.length < 11 || arr.length > 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    let repeat = 0;
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[index] === arr[i]) {
        repeat += 1;
      }
      if (repeat >= 3 || arr[i] < 0) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  let phoneNum = '(';
  for (let index2 = 0; index2 <= 13; index2 += 1) {
    if (index2 < 2) {
      phoneNum += arr[index2];
    } else if (index2 === 2) {
      phoneNum += ')';
    } else if (index2 === 3) {
      phoneNum += ' ';
    } else if (index2 > 3 && index2 <= 8) {
      phoneNum += arr[index2 - 2];
    } else if (index2 === 9) {
      phoneNum += '-';
    } else {
      phoneNum += arr[index2 - 3];
    }
  }
  return phoneNum;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA >= lineB + lineC) {
    return false;
  }
  if (lineB >= lineA + lineC) {
    return false;
  }
  if (lineC >= lineA + lineB) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(str) {
  let waterCups = 0;
  let beverages = str.split(' ');
  for (let index = 0; index < beverages.length; index += 1) {
    if (parseInt(beverages[index], 10)) {
      waterCups += parseInt(beverages[index], 10);
    }
  }
  if (waterCups > 1) {
    return `${waterCups} copos de água`;
  }
  return `${waterCups} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
