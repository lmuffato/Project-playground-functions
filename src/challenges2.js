// Desafio 10
function techList(tecnologias, name) {
  let listTech = [];
  if (tecnologias.length === 0) {
    return 'Vazio!';
  } 
  else {
    for (let index in tecnologias) {
      let objeto = {
        tech: tecnologias[index],
        name: name,
      }
      listTech.push(objeto);
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
