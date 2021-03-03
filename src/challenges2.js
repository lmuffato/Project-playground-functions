// Desafio 10
function techList(array, name) {
  for (let key in array) {
    let object = {
      tech: array[key],
      name: name,
    }
    return object
  }
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
