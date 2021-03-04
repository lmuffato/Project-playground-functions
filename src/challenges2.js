// Desafio 10
function sortTechListArray(array) {
  /* https://pt.stackoverflow.com/questions/46600/  como-ordenar-uma-array-de-objetos-com-array-sort */
  return array.sort((firsItem, secondItem) => {
    if (firsItem.tech < secondItem.tech) return -1;
    if (firsItem.tech > secondItem.tech) return 1;
    return 0;
  });
}

function techList(arrayOfTechs, name) {
  let outputArray = [];
  if (arrayOfTechs.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < arrayOfTechs.length; index += 1) {
    let tech = arrayOfTechs[index];
    outputArray.push({ tech, name });
  }
  return sortTechListArray(outputArray);
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
