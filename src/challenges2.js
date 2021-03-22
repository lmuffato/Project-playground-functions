// Desafio 10
function techList(techName, user) {
  let orderTechName = techName.sort();
  let output = [];
  if (orderTechName.length === 0) {
    output = 'Vazio!';
  }
  for (let i = 0; i < techName.length; i += 1) {
    output.push({
      tech: orderTechName[i],
      name: user,
    });
  }
  return output;
}

// console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
// console.log(techList([], 'Lucas'));

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
