// Desafio 10

function techList(technologies, profile) {
  if (technologies.length === 0) {
    return 'Vazio!';
  }

  let arraySort = technologies.sort();
  let array = [];

  for (let index = 0; index < technologies.length; index += 1) {
    array.push({
      tech: arraySort[index],
      name: profile,
    });
  }

  return array;
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
