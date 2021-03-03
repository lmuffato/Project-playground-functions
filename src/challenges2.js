// Desafio 10
function techList(array, name) {
  let aux = [];
  if (array.length === 0) {
    return 'Vazio!';
  }
  array.sort();
  for (let index = 0; index < array.length; index += 1) {
    let student = {
      tech: array[index],
      name: name,
    };
    aux[index] = student;
  }
  return aux;
}

// console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Lucas'));

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
