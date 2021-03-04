// Desafio 10
function techList(techNames, name) {
  // seu código aqui
  let technologies = [];
  if (techNames.length <= 0) {
    return 'Vazio!';
  }
  for (let techName in techNames.sort()) {
    technologies.push({
      tech: techNames[techName],
      name: name,
    });
  } return technologies;
}
techList([], 'Alexandre');
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
