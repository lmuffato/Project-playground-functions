// Desafio 10
function techList(arr, name) {
  orgarr = arr.sort();
  let techsNames = [];
  for (let index = 0; index < orgarr.length; index++) {
    techsNames.push(
      {
        tech: orgarr[index],
        name: name,
      };
    );
  }

  if (arr.length === 0){
    return 'Vazio!'
  }
  return techsNames;
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
