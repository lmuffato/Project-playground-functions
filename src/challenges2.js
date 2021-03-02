// Desafio 10
function createObj(string) {
  let obj = {
    tech: string,
    name: 'Rafael',
  };
  return obj;
}

function techList(arrayTechNames) {
  if (arrayTechNames.length === 0) {
    return 'Vazio!';
  }
  let objects = [];
  for (let index = 0; index < arrayTechNames.length; index += 1) {
    objects.push(createObj(arrayTechNames[index]));
  }
  return objects;
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
