// Desafio 10
function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  let order = array.sort();
  let techs = order.map((item) => {
    let obj = { tech: item, name: name };
    return obj;
  }, {});
  return techs;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Anderson'));

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
