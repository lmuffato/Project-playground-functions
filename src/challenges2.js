// Desafio 10
function techList(techs, name) {
  
  techs.sort();
  let techAndNameObj = [];
  if (techs.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < techs.length; index += 1) {
    techAndNameObj[index] = {
      tech: techs[index],
      name,
    };
  }
  return techAndNameObj;
} 

// Desafio 11
function wrongRangeCheck(currentValue) {
  
  (currentValue > 9 || currentValue < 0);
}

function generatePhoneNumber(phoneNumb) {

  if (phoneNumb.length !== 11) {
    return "Array com tamanho incorreto."
  };

  if (phoneNumb.some(wrongRangeCheck) === true) {
    return "não é possível gerar um número de telefone com esses valores"
  }
  
  return `(${arr[0]}${arr[1]}) ${arr[2]}${arr[3]}${arr[4]}${arr[5]}${arr[6]}-${arr[7]}${arr[8]}${arr[9]}${arr[10]}`;
} 


//let aaa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
//console.log(generatePhoneNumber(aaa));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {

  if ((lineA > (lineB - lineC)) && (lineA < (Math.abs(lineB + lineC))) && (lineA > (lineB - lineC)) && (lineA < (Math.abs(lineB + lineC))) && ((lineC > (lineA - lineB))) && (lineC < (Math.abs(lineA + lineB)))) {
    return true;
  };
};

console.log(triangleCheck(10, 14, 8));

/*
  Para que seja possível formar um triângulo, é necessário que a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas.

Para obter o valor absoluto de um número em JavaScript, pesquise pela função Math.abs.

O retorno da sua função deverá ser um booleano.

Exemplo: o retorno de triangleCheck(10, 14, 8) deverá ser true.

*/

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