// Desafio 10
function techList(arrayIn, name) {
  let exitArray = [];
  let obj = {};
  if (arrayIn.length === 0) {
    return console.log('Vazio!');
  } else {
    for (let key in arrayIn) {
      obj = {
        'tech': arrayIn[key],
        'name': name
      };
      exitArray.push(obj);
    }
    return console.log(exitArray);
  }
}
console.log(techList([],'lucas'));
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
