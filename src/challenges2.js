// Desafio 10
function techList(arrayIn, name) {
  let exitArray = [];
  let obj = {};
  for (let key in arrayIn) {
    obj = {
      'tech': arrayIn[key],
      'name': name
    };
    exitArray.push(obj);
  }
  return console.log(exitArray);
}
techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas");

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
