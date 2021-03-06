// Desafio 10
function techList(technologies, name) {

  let techs = [];

  if (technologies.length <= 0) {
    return 'vazio!';
  }

  for (let index in technologies.sort()) {
    techs.push(
      {
        tech: technologies[index],
        name: name,
      },
    );
  }
  return techs;
}
// desafio realizado com contriuição de alguns colegas (nilson/mauricio)

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
