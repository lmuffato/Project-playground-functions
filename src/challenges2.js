// Desafio 10
function techList(arrayNames, name) {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC  && lineA > Math.abs(lineB - lineC) ) {
    return true;
  } else if (lineA > lineB + lineC) {
    return false; 
  } else if (lineA < Math.abs(lineB - lineC)) {
  } return false;
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
