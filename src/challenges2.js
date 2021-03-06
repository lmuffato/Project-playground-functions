// Desafio 10
function techList(techArray, name) {
  let technologies = [];

  tech = techArray.sort();
  for(index = 0; index < techArray.length; index += 1) {
    technologies.push({
      tech: techArray[index],
      name,
    });
    if(techArray.length === 0) {
      return "Vazio!";
    }
  } 
return technologies;  
} 
// let tech = ["React", "Jest", "HTML", "CSS", "JavaScript"]
// let name = 'Lucas'
// console.log(techList(tech, name));

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
