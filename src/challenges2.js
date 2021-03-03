// Desafio 10
function techList(technology, name) {
  let techlist = [];
  technology = technology.sort();
  for (let index = 0; index < technology.length; index += 1) {
    techlist.push({
      technology: technology[index],
      name,
    });
  }
  if (technology.length === 0) {
    return 'Vazio';
  }
  return techlist;
}
// Desafio resolvido com ajuda de StackOverFlow

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
