// Desafio 10
function techList(techNames, personName) {
  let techNamesSorted = techNames.sort();
  let techObjects = [];
  for (let index = 0; index < techNamesSorted.length; index += 1) {
    let techObject = { tech: techNamesSorted[index], name: personName };

    techObjects.push(techObject);
  }
  return techObjects;
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
