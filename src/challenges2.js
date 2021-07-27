// Desafio 10
function techList(arrayTech, name) {
  let techObject = [];
  arrayTech.sort();
  if (arrayTech.length !== 0) {
    for (let i = 0; i < arrayTech.length; i += 1) {
      techObject.push({
        tech: arrayTech[i],
        name: `${name}`,
      });
    }
    return techObject;
  }
  return 'Vazio!';
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
