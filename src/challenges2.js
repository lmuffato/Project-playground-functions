// Desafio 10
function techList(array, namE) {
  if (array === 0) {
    return 'Vazio!';
  }
  let listTech = [];
  let arrayOrd = array.sort();
  for (let key in arrayOrd) {
    listTech.push(
      {
        tech: arrayOrd[key],
        name: namE,
      },
    );
  }
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

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
