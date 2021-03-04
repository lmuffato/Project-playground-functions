// Desafio 10
function techList() {
  // seu código aqui
  // Marilia
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui

}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let condA = lineB + lineC;
  let condB = lineA + lineC;
  let condC = lineA + lineB;
  let condD = Math.abs(lineB - lineC);
  let condE = Math.abs(lineA - lineC);
  let condF = Math.abs(lineA - lineB);
  let hypotesisA = ((lineA < condA) && (lineB < condB) && (lineC < condC));
  let hypotesisB = ((lineA > condD) && (lineB > condE) && (lineC > condF));
  if (hypotesisA && hypotesisB) {
    return true;
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
