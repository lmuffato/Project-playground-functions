// Desafio 10
function techList(techs, name) {
  let devTechnology = {tech: techs, name: name};
  let devTechs = []
  // let devTechnologyCopy = '';
  for (let index = 0; index < techs.length; index += 1) {
    devTechnology.tech = techs[index];
    devTechnology.name = name;
    let devTechnologyCopy = Object.assign({}, devTechnology);
    devTechs.push(devTechnologyCopy);
    // console.log(devTechs)
  }
  return devTechs;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Iago'));

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
