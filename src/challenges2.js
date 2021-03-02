// Desafio 10
function techList(tech, name) {
  let techsList = [];

  if(!tech || tech.length === 0) {
    return 'Vazio!'
  }

  for(let index in tech){
    techsList.push(
      {
        tech: tech[index],
        name,
      }
    )
  }

  return techsList

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
