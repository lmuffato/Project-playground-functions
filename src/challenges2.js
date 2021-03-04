// Desafio 10
function techList(array, name) {
  array.sort();
  let technologiesList = {};
  if (array.lenght === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < array.lenght; index += 1) {
    technologiesList.push({
      tech: arrat[index],
      name;
    })
  }
  return technologiesList;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],
"Lucas"))

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
