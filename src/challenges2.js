function techList(technologiesList, name) {
  if (technologiesList.length === 0) {
    return 'Vazio!';
  }
  let technologies = [];
  let orderedTechnologies = technologiesList.sort();
  for (let index = 0; index < orderedTechnologies.length; index += 1) {
    technologies.push(
      {
        tech: orderedTechnologies[index],
        name,
      },
    );
  }
  return technologies;
}

// Desafio 11
function generatePhoneNumber() {
  
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
