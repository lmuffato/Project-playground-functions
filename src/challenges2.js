

// Desafio 10
function techList(tech, name) {

  let result = [];

if (tech.length === 5){
  tech = tech.sort()
} else if (tech.lenght > 0){
  tech 
} else {
  return 'Vazio!'
} 

for (let indexTech = 0; indexTech < tech.length; indexTech += 1){
    result.push("tech: " + tech[indexTech]) + result.push (" name: " + name)
  }
  return result
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],'carlos'))


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
