// Desafio 10
function techList(nomeTech, name) {
  let listNomeTechOrdenada = nomeTech.sort();
  let myObjectList = [];
  let myObject = {};

  for (let index = 0; index < listNomeTechOrdenada.length; index += 1) {
    myObject.tech = listNomeTechOrdenada[index];
    myObject.name = name;
    myObjectList[index] = myObject;
    myObject = {};
  }

  if (myObjectList.length > 0) {
    return myObjectList;
  }
  return 'Vazio!';
}

// Desafio 11
function testListPhoneRepete(listNumber) {
  let contRepete = 0;
  let numberRepet = 0;
  for (let index = 0; index < listNumber.length; index += 1) {
    for (let indexTwo = 0; indexTwo < listNumber.length; indexTwo += 1) {
      if (listNumber[index] === listNumber[indexTwo]) {
        contRepete += 1;
      }
    }
    if (contRepete > numberRepet) {
      numberRepet = contRepete;
    }
    contRepete = 0;
  }
  if (numberRepet >= 3) {
    return true
  } else {
    return false
  }
}
function testListPhoneZeroNine(listNumber) {
  let bigNumber = false;
  let numberZero = false;
  for (let indexOne = 0; indexOne < listNumber.length; indexOne += 1) {
    if (listNumber[indexOne] < 0) {
      numberZero = true;
    } else if (listNumber[indexOne] > 9) {
      bigNumber = true;
    }
  }
  if (bigNumber === false || numberZero === false) {
    return false;
  } else {
    return true;
  }
}
function testListPhone(listNumber) {
  if (testListPhoneZeroNine(listNumber) === true || testListPhoneRepete(listNumber) === true) {
    return true;
  } else {
    return false;
  }
}
function phoneDDDNumber(listNumber) {
  let listDDDPhone = ['(', '0', '0', ')'];
  for (let index = 0; index < 2; index += 1) {
    listDDDPhone[index + 1] = listNumber[index];
  }
  return listDDDPhone.join('');
}
function phoneFirstNumber(listNumber) {
  let listFirstPhone = [];
  for (let index = 2; index < 7; index += 1) {
    listFirstPhone.push(listNumber[index]);
  }
  return listFirstPhone.join('');
}
function phoneLastNumber(listNumber) {
  let listLastPhone = [];
  for (let index = 7; index < listNumber.length; index += 1) {
    listLastPhone.push(listNumber[index]);
  }
  return listLastPhone.join('');
}
function generatePhoneNumber(listNumber) {
  if (listNumber.length > 11 || listNumber.length < 11) {
    return 'Array com tamanho incorreto.';
  } else if (testListPhone(listNumber) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  } else {
    return phoneDDDNumber(listNumber) + ' ' + phoneFirstNumber(listNumber) + '-' + phoneLastNumber(listNumber);
  }
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let somaBC = lineB + lineC;
  let valueAbs = Math.abs(lineB - lineC);

  if (lineA < somaBC && lineA > valueAbs) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(myDrink) {
  let arrayDrink = myDrink.match(/\d/g); // .replace(/\D/g, ' ');
  let contGlass = 0;
  let myGlassH20 = '';

  for (let index = 0; index < arrayDrink.length; index += 1) {
    contGlass += parseInt(arrayDrink[index]);
  }

  if (contGlass === 1) {
    myGlassH20 += `${contGlass} copo de água`;
  } else if (contGlass > 0) {
    myGlassH20 += `${contGlass} copos de água`;
  }

  return myGlassH20;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
