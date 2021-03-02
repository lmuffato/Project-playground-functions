// Desafio 10
function techList(tech, name) {
  let techSort = tech.sort();
  let techObj = [];
  let realName = name;

  if (tech.length === 0) {
    return 'Vazio!';
  }

  for (let index = 0; index < techSort.length; index += 1) {
    techObj.push(
      {
        tech: techSort[index],
        name: realName,
      },
    );
  }
  return techObj;
}

// Desafio 11
function generatePhoneNumber(tel) {
  let repeats = 0;
  if (tel.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < tel.length; index += 1) {
    for (let index2 = 0; index2 < tel.length; index2 += 1) {
      if (tel[index] === tel[index2]) {
        repeats += 1;
      }
      if ((repeats >= 3) || (tel[index2] < 0) || (tel[index2] > 9)) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    return '(' + tel[0] + tel[1] + ')' + ' ' + tel[2] + tel[3] + tel[4] + tel[5] + tel[6]
    + '-' + tel[7] + tel[8] + tel[9] + tel[10];
  }
}
console.log(generatePhoneNumber([1,2,3,4,5,6,7,8,9,1,2]))

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let operations = {
    sumAB: lineA + lineB,
    sumAC: lineA + lineC,
    sumBC: lineB + lineC,
    subAB: Math.abs(lineA - lineB),
    subBC: Math.abs(lineB - lineC),
    subAC: Math.abs(lineA - lineC),
  };
  return lineA < operations.sumBC && lineA > operations.subBC
    && lineB < operations.sumAB && lineB > operations.subAB
    && lineC < operations.sumAB && lineC > operations.subAB;
}

// Desafio 13
function hydrate(string) {
  let numbers = string.toString('').match(/\d+/g).join('');
  let sum = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    sum += +numbers[index];
  }
  if (sum === 1) {
    return `${sum} copo de água`;
  }
  return `${sum} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
