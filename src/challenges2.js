// Desafio 10
function techList(techs, name) {
  let devTechnology = { tech: techs, name: name };
  let devTechs = [];
  let empty = 'Vazio'
  for (let index = 0; index <= techs.length; index += 1) {
    if (devTechnology.tech.length === 0) {
      devTechs.push('Vazio!');
    } else {
      devTechnology.tech = techs[index];
      devTechnology.name = name;
      let devTechnologyCopy = Object.assign({}, devTechnology);
      devTechs.push(devTechnologyCopy);
    }
  }
  return devTechs;
  
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
