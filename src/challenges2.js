// Desafio 10
function techList(techArray, name) {
  let techObjects = [];
  techArray.sort();

  for (let index = 0; index < techArray.length; index += 1) {
    let obj = {
      tech: techArray[index],
      name,
    };
    techObjects.push(obj);
  }
  return techObjects;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Rodrigo'));

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
