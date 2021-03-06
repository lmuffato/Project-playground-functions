// Desafio 10
function techList(tech, name) {
  if (!tech || tech.length === 0) {
    return 'Vazio!';
  }

  let techsList = tech.sort();
  let list = [];
  for (let index in techsList) {
    list.push(
      {
        tech: tech[index],
        name,
      },
    );
  }
  return list;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  const isLengthValid = numbers.length === 11;
  const isNumbersValid = !numbers.find((number) => number < 0 | number > 9);
  // const repeatedNumber = numbers.find((element) => element === element );
  if (!isLengthValid) {
    return 'Array com tamanho incorreto.';
  }

  let phoneNumber = [];

  for (let index in numbers) {
    let number = numbers[index];

    const hasThreeRepeatedNumber = numbers.filter((element) => element === number).length >= 3;

    if (!isNumbersValid | hasThreeRepeatedNumber) {
      return 'não é possível gerar um número de telefone com esses valores';
    }

    switch (Number(index)) {
    case 0:
      phoneNumber.push('(', number);
      break;
    case 1:
      phoneNumber.push(number, ')', ' ');
      break;
    case 6:
      phoneNumber.push(number, '-');
      break;
    default:
      phoneNumber.push(number);
    }
  }

  return phoneNumber.join('');
}

// Desafio 12
function verifyTriangleLine(currentLine, line1, line2) {
  return currentLine < line1 + line2 && currentLine > Math.abs(line1 - line2);
}
function triangleCheck(lineA, lineB, lineC) {
  let islineAValid = verifyTriangleLine(lineA, lineB, lineC);
  let islineBValid = verifyTriangleLine(lineB, lineA, lineC);
  let islineCValid = verifyTriangleLine(lineC, lineA, lineB);

  if (islineAValid === islineBValid === islineCValid) {
    return true;
  }

  return false;
}

console.log(triangleCheck(10, 14, 8));

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
