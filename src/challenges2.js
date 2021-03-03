// Desafio 10
// Link utilizado para estudo na realização deste desafio:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function techList(techArray, studentName) {
  let output = [];
  for (let tech = 0; tech < techArray.sort().length; tech += 1) {
    const techObject = { tech: techArray[tech], name: studentName };
    output.push(techObject);
  }
  if (techArray.length === 0) {
    output = 'Vazio!';
  }
  return output;
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
