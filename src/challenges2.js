// Desafio 10
function techList(arrayTechs, name) {
  let arrayNamesSort = arrayTechs.sort(); //ordenando arrayTechs.
  let arrayObjectInsert = []; //criando array vazio que será lotado de objetos e retornado.
  for(let i = 0; i < arrayNamesSort.length; i += 1){
    let objectInsert = {}; //criando objeto vazio que será preenchido e colocado no arrayObjectInsert
    objectInsert['tech'] = arrayNamesSort[i];
    objectInsert['name'] = name;
    // objectInsert[i].tech = arrayNamesSort[i];
    // objectInsert[i].name = name;
    arrayObjectInsert.push(objectInsert);
  }
  return arrayObjectInsert;
}
// array = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
// console.log(techList(array, 'stanrley'));


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
