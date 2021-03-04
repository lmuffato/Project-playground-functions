// Desafio 10
function techList(array, studentName) {
  let object = [];
  if (array.length === 0) {
    object = 'Vazio!';
  }
  for (let index = 0; index < array.sort().length; index += 1) {
    let techRefer = { tech: array[index], name: studentName };
    object.push(techRefer);
  }
  return object;
}
let meuNome = 'Felipe';
let techs = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
console.log(techList(techs, meuNome));
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
