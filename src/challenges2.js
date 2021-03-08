// Desafio 10
function createObject(name1, name2) {
  let object = {
    tech: name1,
    name: name2,
  };
  return object;
}

function techList(techArray, name) {
  if (techArray.length === 0) {
    return 'Vazio!';
  }
  techArray.sort();
  let objects = [];
  for (let index = 0; index < techArray.length; index += 1) {
    objects.push(createObject(techArray[index], name));
  }
  return objects
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
