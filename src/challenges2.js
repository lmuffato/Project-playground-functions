// Desafio 10
function techList(techName, name) {
  if (techName.length === 0) {
    return 'Vazio!';
  }
  let list = [];
  techName.sort(); // ordenar;
  for (let index = 0; index < techName.length; index += 1) {
    list.push({ tech: techName[index], name }); // empurrar dentro do array
  } // name - propriedade do JS: https://www.w3schools.com/js/js_objects.asp;
  return list;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

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
