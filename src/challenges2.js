// Desafio 10
function techList(name) {
  // seu código aqui
  const tech = ['JavaScript', 'Phyton', 'Java', 'C++'];
  tech.sort();
  const newArray = tech.map((element) => {
    return { tech: `${element}`, name };
  });
  return newArray;
}
console.log(techList('Lucas'));

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
