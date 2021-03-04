// Desafio 10
function techList(array, name) {
  let objectArray = [];
  for (let index = 0; index < array.length; index += 1) {
    objectArray.push({
      tech: array[index],
      name });
  }
  return objectArray.sort();
}

let array = ["React", "Jest", "HTML", "CSS", "JavaScript"];
let name = "Rodrigo";
console.log(techList(array,name));

// Desafio 11
function generatePhoneNumber(array) {
  for (let index = 0; index < array.lenght; )
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
