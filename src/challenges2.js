// Desafio 10
function techList(technology, name) {
  technology.sort();
  let listTech = [];
  let help = name;
  for (let index = 0; index < technology.length; index += 1) {
    let list = {
      tech: technology[index],
      name: help };
    listTech[index] = list;
  }
  return listTech;
}

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

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
