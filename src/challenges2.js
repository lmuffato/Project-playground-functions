// Desafio 10
function techList(techNames , name) {
  let listTech = [];
  if (techNames.length === 0) {
    return 'Vazio!';
  } else {
    for (let index in techNames.sort()) {
      let techObject = {
        tech: techNames[index],
        name: name,
      }
      listTech.push(techObject);
    }
    return listTech;
  }
}

// Desafio 11
function generatePhoneNumber(phoneNumber) {
 let erro = false;
  if (phoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
    erro = true;
  } else {
    for (let index in phoneNumber) {
      if (phoneNumber[index] < 0 || phoneNumber[index] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
        erro = true;
      }
    }
  }
 // console.log(erro);
 /*VerifNumRep (phoneNumber);
  console.log(VerifNumRep(phoneNumber));
  if (VerifNumRep (phoneNumber) !== '') {
    erro = true;
  }*/
 // console.log(VerifNumRep (phoneNumber));
  if (erro === false) {
    return correctNumber(phoneNumber);
  }
 // console.log(numeroCerto);   
}

/*function VerifNumRep (numTelefone) {
  while (erro = false) {
  for (let index = 0; index <= numTelefone.length; index += 1) {
    let repeat = 1;
    for (indexNumber = index + 1; indexNumber < numTelefone.length; indexNumber +=1) {
      if (numTelefone[index] === numTelefone[indexNumber]) {
        repeat += 1;
        console.log(repeat);
      }
    }
    if (repeat >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
      erro = true;
    }
  }
}
}*/
 //let numero =  [1, 2, 3, 4, 9, 9, 7, 8, 9, 0, 1];
function correctNumber (numero) {
  let finalNumber = '(' + numero[0] + numero[1] + ') ';
  for (let index = 2; index < 7; index += 1) {
    finalNumber += numero[index];
  }
  finalNumber += '-';
  for (let index2 = 7; index2 < numero.length; index2 += 1) {
    finalNumber += numero[index2];
  }
  return finalNumber;
}

console.log(generatePhoneNumber([1, 9, 0, 4, 2, 6, 7, 8, 9, 0, 1]))

// Desafio 12
function triangleCheck() {
  // seu código aqui
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
