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
console.log(techList([], 'Lucas'));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
