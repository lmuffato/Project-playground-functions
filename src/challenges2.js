// Desafio 10 //used this documentation about sort method https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function techList(techNameArray, userName) {
  let items = [];
  for (let index = 0; index < techNameArray.sort().length; index += 1) {
    items[index] = {
      tech: techNameArray[index],
      name: userName,
    };
  }
  if (techNameArray.length === 0) {
    items = 'Vazio!';
  }
  return items;
}

// Desafio 11 //found about the filter method on https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
function checkRepeat(arrNum) {
  for (let index of arrNum) {
    let count = arrNum[index];
    let numbersCount = arrNum.filter((x) => x === count).length;
    if (numbersCount >= 3) {
      return true;
    }
  }
}

function checkConditions(arrNum) {
  for (let index = 0; index < arrNum.length; index += 1) {
    if (arrNum[index] < 0 || arrNum[index] > 9) {
      return true;
    }
  }
  return false;
}

function generatePhoneNumber(arrNum) {
  if (arrNum.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (checkConditions(arrNum) === true || checkRepeat(arrNum) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return `(${arrNum[0]}${arrNum[1]}) ${arrNum[2]}${arrNum[3]}\
${arrNum[4]}${arrNum[5]}${arrNum[6]}-${arrNum[7]}${arrNum[8]}\
${arrNum[9]}${arrNum[10]}`;
}
console.log(generatePhoneNumber([5, 2, 8, 1, 5, 3, 7, 2, 8, 9, 0]));

// Desafio 12
function lineConditions(line1, line2, line3) {
  return line1 < (line2 + line3) && line1 > Math.abs(line2 - line3);
}

function triangleCheck(lineA, lineB, lineC) {
  let checklineA = lineConditions(lineA, lineB, lineC);
  let checklineB = lineConditions(lineB, lineA, lineC);
  let checklineC = lineConditions(lineC, lineA, lineB);
  if (checklineA && checklineB && checklineC) {
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
