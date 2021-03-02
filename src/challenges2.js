// Desafio 10
function techList(techs, name) {
  if (techs.length === 0) {
    return 'Vazio!';
  }
  techs.sort();
  let techAndNameObject = [];
  for (let index = 0; index < techs.length; index += 1) {
    techAndNameObject.push({
      tech: techs[index],
      name,
    });
  }
  return techAndNameObject;
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
