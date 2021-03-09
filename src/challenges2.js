// Desafio 10
function techList(arrayTechs, name) {
  let finalList = [];

  if (arrayTechs.length <= 0) {
    finalList = 'Vazio!';
  } else {
    arrayTechs.sort();
    for (let i = 0; i < arrayTechs.length; i += 1) {
      finalList.push(
        {
          tech: arrayTechs[i],
          name,
        },
      );
    }
  }
  return finalList;
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
