// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11 
function generatePhoneNumber(myArray) {

  if (myArray.length !== 11) {
    return 'Array com tamanho incorreto.'
  }

  for (let index = 0; index < myArray.length; index += 1) {
   if (myArray[index] < 0 || myArray[index] > 9) {
     return 'não é possível gerar um número de telefone com esses valores';
   }
    for (let j = 1; j < myArray.length; j += 1) {
      for (let k = 2; k < myArray.length; k += 1) {
        if (myArray[index] === myArray[j] === myArray[k]) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
  }

  let myString = '';

  for (let index = 0; index < myArray.length; index += 1) {
    switch(index) {
      case 0:
        myString += '(' + myArray[index];
        break;
      case 1:
        myString += myArray[index] + ')';
        break;
      case 6:
        myString += myArray[index] + '-';
        break;
      default:
        myString += myArray[index];
    }
  }

 return myString; 

}

console.log(generatePhoneNumber([1, 2, 3, 3, 3, 0, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) { 

if ((lineA < lineB + lineC) && (lineB < lineA + lineC) && (lineC < lineB + lineA)) {
  if (Math.abs(lineA > lineB - lineA) && Math.abs(lineA > lineC - lineA)) {
    if (Math.abs(lineB > lineA - lineB) && Math.abs(lineB > lineC - lineB)) {
      if (Math.abs(lineC > lineA - lineC) && Math.abs(lineC > lineB - lineC)) {
        return true;
      }
    }
  } 
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
