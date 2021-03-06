// Desafio 10 //used this documentation about sort method https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function techList(TechNameArray, userName) {
  let items = [];
  for (let index = 0; index < TechNameArray.sort().length; index += 1) {
    items[index] = {
      tech: TechNameArray[index],
      name: userName,
    };
  }
  return items;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

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
