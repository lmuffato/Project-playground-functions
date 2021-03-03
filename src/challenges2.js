// Desafio 10
function techList(techsArray, name) {
  let techsArraySorted = techsArray.sort();
  let arrayObjectTechs = [];
  for (let index = 0; index < techsArraySorted. length; index+=1) {
    let objectTechs = {};
    objectTechs['tech'] = techsArraySorted[index];
    objectTechs['name'] = name;
    arrayObjectTechs.push(objectTechs);
    }
    return arrayObjectTechs;

}
console.log(techList(['oi','eu', 'sou','o','goku'],'orlando'));

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
