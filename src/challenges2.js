// Desafio 10
/* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Pelo site "aprendi" a dar sort em um array com objetos */
function techList(array, name) {
  let objectArray = [];
  if (array.length === 0) {
    return 'Vazio!';
  }
  let arraySorted = array.sort();
  for (let index = 0; index < arraySorted.length; index += 1) {
    objectArray.push({
      tech: array[index],
      name });
  }
  return objectArray;
}
/*let reorderObjectArray = objectArray.sort(function (a, b) {
    if (a.tech > b.tech) {
      return 1;
    }
    if (a.tech < b.tech) {
      return -1;
    } return 0;
  });*/
let array = [];
let name = "Lucas";

console.log(techList(array, name));

// Desafio 11
function generatePhoneNumber(array) {

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
