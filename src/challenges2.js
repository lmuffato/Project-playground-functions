// Desafio 10
function techList(arrayTech, fame) {
  let newArrayObjects = [];
  if (arrayTech.length === 0) {
    console.log('Vazio!');
  } else {
    for (let index = 0; index < arrayTech.length; index += 1) {
      newArrayObjects.push({ tech: arrayTech[index], name: fame });
    }
  }
  return newArrayObjects;
}
// Consultation made on the website : https://pt.stackoverflow.com/questions/83588/em-javascript-como-verificar-que-um-objeto-est%C3%A1-vazio-sem-jquery

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > Math.abs(lineB - lineC) && lineA < (lineB + lineC)
   && lineB > Math.abs(lineA - lineC) && lineB < (lineA + lineC)
   && lineC > Math.abs(lineA - lineB) && lineC < (lineA + lineB)) {
    return true;
  }
  return false;
}
// consultation made on the website : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

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
