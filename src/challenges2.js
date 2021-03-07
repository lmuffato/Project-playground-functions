// Desafio 10
function techList(techNames , name) {
  let listTech = [];
  if (techNames.length === 0) {
    return 'Vazio!';
  } else {
    for (let index in techNames.sort()) {
      let techObject = {
        tech: techNames[index],
        name: name,
      }
      listTech.push(techObject);
    }
    return listTech;
  }
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
