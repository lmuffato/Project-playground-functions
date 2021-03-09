// Desafio 10
function techList(arrayTech, name) {
  let techObject = {};
  for (let index = 0; index < arrayTech.length; index += 1) {
    techObject['tech'] = arrayTech[index];
    techObject['name'] = name;
  }
return techObject;
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
