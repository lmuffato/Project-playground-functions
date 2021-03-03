// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let techListObject = {};
  for (let i = 0; i < tech.length; i += 1) {
    techListObject.tech = tech[i];
    techListObject.name = name;
    console.log(techListObject);
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
