// Desafio 10
function techList(techArray, name) {
  // seu código aqui
  let listOfTechs = [];
  let techItem = {
    tech: '',
    name: '',
  }
  techItem[name] = name;
  for (let index in techArray) {
    techItem['tech'] = techArray[index];
    listOfTechs.push(techItem);
  }
  return listOfTechs;
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
