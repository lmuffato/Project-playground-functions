// Desafio 10
function techList(array, name) {
  let value = [];
  if (array.length === 0) {
    return 'Vazio!';
  }
  value.sort();
  for (let index = 0; index < array.lenght; index += 1) {
    let student = {
      tech: array[index],
      name: name,
    };
    value[index] = student;
  }
  return value;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    return true;
  } else if (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)) {
    return true;
  } else if (lineC < (lineA + lineB) && lineC > Math.abs(lineA - lineB)) {
    return true;
  } else {
    return false;
  }
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
