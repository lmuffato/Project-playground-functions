// Desafio 10
function techList(tecnologias,nome) {
  // seu código aqui
  if (tecnologias.length === 0) {
    return "Vazio!";
  }

  let arrayTech = tecnologias.sort();
  let newArray = [];

  for (let key in arrayTech) {
    newArray.push(
      {
        tech: arrayTech[key],
        name: nome,
      },
    )
  }
  return console.log(newArray);
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
