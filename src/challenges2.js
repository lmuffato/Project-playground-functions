// Desafio 10
function techList(name, techNames) {
  // seu código aqui
  techNames.sort();
  let techNameslist = {};
  let technologies = [];
  if (techNames.length === 0) {
    return 'Vazio!';
  }
  else {
    for (let tech in techNames) {
      techNameslist.name = name;
      techNameslist.tech = (techNames[tech]);
      technologies.push(techNameslist);
    } 
  }return technologies;
} techList('Alexandre',['React', 'Jest', 'HTML', 'CSS', 'JavaScript']);


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
}
