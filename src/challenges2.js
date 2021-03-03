// Desafio 10
function techList(arrayTechNames, name) {
  let exitArray = [];
  if (arrayTechNames.length > 0) {
    let arraySorted = arrayTechNames.sort();
    for (let index in arraySorted) {
      let insertObj = {};
      insertObj.tech = arraySorted[index];
      insertObj.name = name;
      exitArray.push(insertObj);
    }
  } else {
    return 'Vazio!';
  }
  return exitArray;
}

// Desafio 11
function repeatNumbers(array) {
  for (let index = 0; index < array.length; index += 1) {
    let count = 0;
    for (let index2 = 0; index2 < array.length; index2 +=1) {
      if (array[index] === array[index2]) {
        count+=1;
        if (count > 3){
          return true;
        }
      }
    }
  }
  return false;
}

function generatePhoneNumber(arrayPhoneNumbers) {
  if (arrayPhoneNumbers.length != 11){
    return 'Array com tamanho incorreto.'
  }
  for (let index = 0; index < arrayPhoneNumbers.length; index += 1) {
    if (arrayPhoneNumbers[index] < 0 || arrayPhoneNumbers[index] > 9 || repeatNumbers(arrayPhoneNumbers) || arrayPhoneNumbers[0] === 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let phone = arrayPhoneNumbers;
  return ('(' + phone[0] + '' + phone[1] + ') ' + phone[2] + '' + phone[3] + '' + phone[4] + '' + phone[5] + '' + phone[6] + '-' + phone[7] + '' + phone[8] + '' + phone[9] + '' + phone[10]);
}
console.log(generatePhoneNumber([0, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))

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
