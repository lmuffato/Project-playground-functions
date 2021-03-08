// Desafio 10
function techList(namesTech, name) {
  let listTech = [];
  if (namesTech.length === 0) {
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
function generatePhoneNumber(phoneNumbers) {

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
