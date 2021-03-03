// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let techListObject = {};
  let retornoObject = [];
  tech = tech.sort();
  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < tech.length; i += 1) {
    techListObject.tech = tech[i];
    techListObject.name = name;
    retornoObject.push({ tech: tech[i], name });
  }
  return retornoObject;
}

// Desafio 11
function generatePhoneNumber(telNumber) {
  // seu código aqui
  let repete;
  let ddd;
  let prim;
  let seg;
  if (telNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < telNumber.length; i += 1) {
    if (telNumber[i] > 9 || telNumber[i] < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    repete = 0;
    for (let j = 0; j < telNumber.length; j += 1) {
      if (telNumber[i] === telNumber[j]) {
        repete += 1;
      }
    }
    if (repete >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  ddd = `(${telNumber[0]}${telNumber[1]})`;
  prim = `${telNumber[2]}${telNumber[3]}${telNumber[4]}${telNumber[5]}${telNumber[6]}-`;
  seg = `${telNumber[7]}${telNumber[8]}${telNumber[9]}${telNumber[10]}`;
  return `${ddd} ${prim}${seg}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let cont = 0;
  for (let i = 0; i < 3; i += 1) {
    if (lineA < Math.sum(lineB, lineC) && lineA > Math.abs(Math.substract(lineB, lineC))) {
      cont += 1;
    }
    if (lineB < Math.sum(lineA, lineC) && lineB > Math.abs(Math.substract(lineA, lineC))) {
      cont += 1;
    }
    if (lineC < Math.sum(lineB, lineA) && lineC > Math.abs(Math.substract(lineB, lineA))) {
      cont += 1;
    }
  }
  if (cont === 3) {
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
