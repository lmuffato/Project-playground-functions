// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let techList = [];
  let techObj = {}

  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < tech.length; i += 1) {
    techlist.tech = tech[i];
    techList.name = name;
    techObj.push({ tech: tech[i], name });
  }
  return retornoObject;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(LineA, LineB, LineC) {
  // seu código aqui
  let DistA = Math.abs(lineA - lineB);
  let DistB = lineA + lineB;
  if (lineC > DistA && lineC < DistB) {
    return true;
  }
  return false;
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
