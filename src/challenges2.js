// Desafio 10
// Este código fiz com ajuda da Elisa França.
// Usei também o W3School para aprender sobre o sort.
function techList(tech, name) {
  if (tech.length === 0) {
    return 'Vazio!';
  }
  let tecno = tech.sort();
  let techSortList = [];
  for (let index = 0; index < tecno.length; index += 1) {
    techSortList.push(
      {
        tech: tecno[index],
        name,
      },
    );
  }
  return techSortList;
}
console.log(techList([]));
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
