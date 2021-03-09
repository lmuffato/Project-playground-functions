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

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let checkline1 = false;
  let checkline2 = false;
  if (lineA < (lineB + lineC)) {
    checkline1 = true;
  } if (lineA > Math.abs(lineB - lineC)) {
    checkline2 = true;
  } if (checkline1 && checkline2) {
    return true;
  }
  return false;
}

// Desafio 13 //found about replace and regex at https://stackoverflow.com/questions/10003683/how-can-i-extract-a-number-from-a-string-in-javascript
function hydrate(drinks) {
  let num = (drinks.replace(/\D/g, ''));
  let water = 0;
  for (let index = 0; index < num.length; index += 1) {
    water += parseInt(num[index], 10);
  }
  if (water === 1 || water === 0) {
    return `${water} copo de água`;
  }
  return `${water} copos de água;`;
}

console.log(hydrate('1 sdasdsa, 5asdsa 6 asdas'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
