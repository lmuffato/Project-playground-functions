// Desafio 10
function techList(technologies, name) {
  let technologiesGroup = []
  if (technologies.length === 0) {
    technologiesGroup = 'Vazio!';
  } else {
    technologies = technologies.sort()
    for (let index = 0; index < technologies.length; index++) {
      technologiesGroup.push( {
        tech: technologies[index],
        name: name
      });
    }
  }
  return technologiesGroup;
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
