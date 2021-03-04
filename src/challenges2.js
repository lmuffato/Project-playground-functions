// Desafio 10
function techList(array, name) {
  let result = [];
  let object = {
    tech: '',
    nome: name,
  };
  if (array.length === 0) {
    return 'Vazio!';
  }
  array.sort();
  for (let index = 0; index < array.length; index += 1) {
    object = {
      tech: array[index],
      nome: name };
    result.push(object);
  }
  return result;
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
