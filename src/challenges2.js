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

// Desafio 11
function checkRepeat(arrNum) {
  let count = 0;
  for (let index = 0; index < arrNum.length; index += 1) {
    if (arrNum[index] === arrNum[0]) {
      count += 1;
    }
  }
  return count;
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
  if (checkConditions(arrNum) === true || checkRepeat(arrNum) >= 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  if (arrNum.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  return `(${arrNum[0]}${arrNum[1]})${arrNum[2]}${arrNum[3]}\
${arrNum[4]}${arrNum[5]}${arrNum[6]}-${arrNum[7]}${arrNum[8]}\
${arrNum[9]}${arrNum[10]}`;
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
