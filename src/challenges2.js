// Desafio 10
function techList(namesTech, name) {
  let listTech = [];
  if (namesTech.isEmpty) {
    return 'Vazio!';
  }
  for (let i = 0; i < namesTech.length; i += 1) {
    let listTechItem = {
      tech: namesTech[i],
      name,
    };
    listTech.push(listTechItem);
  }
  listTech.sort((a, b) => a.tech.localeCompare(b.tech));
  return listTech;
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
let arrayNames = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
console.log(techList(arrayNames, 'Lucas'));
