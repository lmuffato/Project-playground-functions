// Desafio 10
function techList(array, name) {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    return 'true';
  } else if (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)) {
    return 'true';
  } else if (lineC < (lineA + lineB) && lineC > Math.abs(lineA - lineB)) {
    return 'true';
  } else {
    return 'false';
  }
}
console.log(triangleCheck(10, 15, 30));

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
