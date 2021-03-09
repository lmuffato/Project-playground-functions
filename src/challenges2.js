// Desafio 10
function techList(techNames, name) {
  let array = {
    tech: '',
    name: ''
  }; 
  techNames = techNames.sort()
  for (let index = 0; index < techNames.length; index +=1){
    array.tech = techNames[index];
    array.tech = name;
  }
}

// Desafio 11
function generatePhoneNumber() {
  
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
