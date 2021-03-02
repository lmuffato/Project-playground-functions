// Desafio 10
function techList(tech, name) {
  if(!tech || tech.length === 0) {
    return 'Vazio!'
  }

  let techsList = tech.sort();
  let list = [];
  
  for(let index in techsList){
    list.push(
      {
        tech: tech[index],
        name,
      }
    )
  }

  return list

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
