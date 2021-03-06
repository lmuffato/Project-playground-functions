// Desafio 10
function techList(tech, name) {
  if (tech.length === 0) {
    return 'vazio!';
  }
  tech.sort();

  let techs = [];

  for (let index = 0; index < tech.length; index += 1) {
    techs.push(
      {
        tech: tech[index],
        name: name,
      },
    );
  }
  return techs;
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
