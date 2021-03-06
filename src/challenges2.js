// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11 - PENDENTE!
function generatePhoneNumber(array) {
  let repete = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9 || ) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    if (array.length > 11) {
    return 'Array com tamanho incorreto';
    } 
    if (array[index] === array[index]) {
    repete ++
      if (repete > 2) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  } else {
    let numbers = array.join('');
    
  }  

}

console.log(generatePhoneNumber([0,1,2,3,]))

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
   if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
     return true;
   } else if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
      return true; 
   } else if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
     return true;
   } else {
     return false;
   }
}

console.log(triangleCheck(10,14,8));
console.log(triangleCheck(50, 10, 11));
console.log(triangleCheck(7, 20, 10))

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
