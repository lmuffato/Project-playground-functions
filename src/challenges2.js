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
function generatePhoneNumber(listNumber) {
  let listFirstPhone = [];
  let listDDDPhone = [];
  let listLastPhone = [];
  let delimitador = 0;

  if (listNumber.length > 11 || listNumber.length < 11) {
    return 'Array com tamanho incorreto.';
  } if (testListPhone(listNumber) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  for (let index = 0; index < 4; index += 1) {
    if (index === 0) {
      listDDDPhone[index] = '(';
      delimitador += 1;
    } else if (index === 3) {
      listDDDPhone[index] = ')';
      delimitador += 1;
    } else {
      listDDDPhone[index] = listNumber[index - delimitador];
    }
  }
  for (let index = 4; index < 9; index += 1) {
    listFirstPhone[index] = listNumber[index - delimitador];
  }
  for (let index = 9; index < listNumber.length + delimitador; index += 1) {
    listLastPhone[index] = listNumber[index - delimitador];
  }
  listFirstPhone = listFirstPhone.join('');
  listDDDPhone = listDDDPhone.join('');
  listLastPhone = listLastPhone.join('');
  return `${listDDDPhone} ${listFirstPhone}-${listLastPhone}`;
}
function testListPhone(listNumber) {
  let numberZero = false;
  let bigNumber = false;
  let repetTree = false;
  let contRepete = 0;
  let numberRepet = 0;

  for (let index = 0; index < listNumber.length; index += 1) {
    if (listNumber[index] < 0) {
      numberZero = true;
    } else if (listNumber[index] > 9) {
      bigNumber = true;
    }
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
    repetTree = true;
  }
  if (numberZero === true || bigNumber === true || repetTree === true) {
    return true;
  }
  return false;
}

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
  let arrayDrink = myDrink.match(/\d/g);     // .replace(/\D/g, ' ');
  let contGlass = 0;
  let myGlassH20 = '';

  for (let index = 0; index < arrayDrink.length; index += 1) {
    contGlass += parseInt(arrayDrink[index]);
  }

  if (contGlass === 1) {
    myGlassH20 += contGlass + ' copo de água';
  } else if (contGlass > 0) {
    myGlassH20 += contGlass + ' copos de água';
  }

  return myGlassH20;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
