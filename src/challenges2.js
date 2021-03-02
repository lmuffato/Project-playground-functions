// Desafio 10
function techList(techArray, name) {
  techArray.sort()
  let arrayOfObjects = []
  if (techArray.length == 0) {
    arrayOfObjects = 'Vazio!'
  }
  for (let index = 0; index < techArray.length; index += 1) {
    arrayOfObjects.push({tech: techArray[index], name: name})
  }
  return arrayOfObjects
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

console.log(techList([], "Lucas"))
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"))

