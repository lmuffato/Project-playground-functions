function techList(technologiesList, name) {
  let techs = [];
  technologiesList.sort();

  if (technologiesList.length <= 0) {
    return 'Vazio!'
  }
  for (let index = 0; index < technologiesList.length; index += 1) {
    techs.push (
      {
        tech: technologies[index],
        name: name
      },
    );
  } return techs
}
 

// Desafio 11
function generatePhoneNumber()


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
