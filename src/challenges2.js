// Desafio 10
function techList(array, name) {
  array.sort();
  let techlist = [];
  if (array.length === 0) {
    return 'Vazio!'
  }
  for (let index = 0; index < array.length; indice += 1) {
    techlist = {
      tech: array[index],
      name: name
    }
  return techlist;
  }
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
