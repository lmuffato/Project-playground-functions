// Desafio 10
function techList(techArray, name) {
  techArray.sort()
  let techName = {
    tech: 'tech: ',
    name: 'name: ' + name
  }
  for (let index = 0; index < 2; index += 1){
    if (techArray[index] === ' ') {
      techName = 'Vazio!';
    } else {
      techName.tech = 'tech: ' + techArrayOrden[index];
    }
  }
}  

console.log(techList(['js', 'css'], 'luiz'));

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
