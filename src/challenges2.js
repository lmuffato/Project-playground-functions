// Desafio 10
function techList(tech, name) {
  let newList = [];
  for (let index = 0; index < tech.length; index += 1) {
    newList.push({
      tech: tech[index],
      name,
    });
  }
  if (tech.length === 0) {
    return 'Vazio!';
  }
  return newList;
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

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
