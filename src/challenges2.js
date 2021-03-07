// Desafio 10
//  auxilio para resolução desse desafio foi revisão de codigos de colegas 
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects
function techList(technologies, studantsname) {
  let arrayOfTechs = [];

  for (let index = 0; index < technologies.length; index += 1) {
    let newObject = { tech: technologies[index], name: studantsname };
    arrayOfTechs.push(newObject);
  }
  
  if (technologies.length === 0) {
    arrayOfTechs = 'Vazio!';
  }
  
  return arrayOfTechs;
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
