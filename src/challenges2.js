// Desafio 10
function techList(list, name) {
  // seu código aqui
  if (list.length === 0) {
    return 'Vazio!';
  }
  list.sort();
  const newArray = list.map((element) => {
    const result = { tech: `${element}`, name };
    return result;
  });
  return newArray;
}
console.log(techList(['JavaScript', 'Phyton', 'Java', 'C++'], 'Lucas'));

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
