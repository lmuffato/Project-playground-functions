// Desafio 10
function techList(arr, name) {
  let list = arr.sort();
  let techsNames = [];
  for (let index = 0; index < list.length; index += 1) {
    techsNames.push(
      {
        tech: list[index],
        name,
      },
    );
  }

  if (arr.length === 0) {
    return 'Vazio!';
  }
  return techsNames;
}
// Desafio resolvido com ajuda de StackOverFlow

// Desafio 11
function generatePhoneNumber() {
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA >= lineB + lineC) {
    return false;
  } if (lineB >= lineA + lineC) {
    return false;
  } if (lineC >= lineA + lineB) {
    return false;
  }
  return true;
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
