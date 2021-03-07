// Desafio 10
/* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Pelo site "aprendi" a dar sort em um array com objetos */
function techList(array, name) {
  let objectArray = [];
  if (array.length === 0) {
    return 'Vazio!';
  }
  let arraySorted = array.sort();
  for (let index = 0; index < arraySorted.length; index += 1) {
    objectArray.push({
      tech: array[index],
      name
    });
  }
  return objectArray;
}
/* let reorderObjectArray = objectArray.sort(function (a, b) {
    if (a.tech > b.tech) {
      return 1;
    }
    if (a.tech < b.tech) {
      return -1;
    } return 0;
  }); */

// Desafio 11
function generatePhoneNumber(array) {
  let phoneNumber = '';
  if (array.length === 11) {
    for (let index = 0; index < array.length; index += 1) {
      phoneNumber += array[index];
    }
    phoneNumber = phoneNumber.substring(0, 0) + '(' + phoneNumber.substring(0, phoneNumber.length);
    phoneNumber = phoneNumber.substring(0, 3) + ') ' + phoneNumber.substring(3, phoneNumber.length);
    phoneNumber = phoneNumber.substring(0, 10) + '-' + phoneNumber.substring(10, phoneNumber.length);

    return phoneNumber;
  }
  return 'Array com tamanho incorreto';
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
