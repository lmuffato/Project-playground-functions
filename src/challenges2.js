// Desafio 10
function techList(techs, name) {
  
  let sortTechs = techs.sort();
  let techAndNameObj = [];
  if (techs.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < sortTechs.length; index += 1) {
    techAndNameObj[index] = {
      tech: sortTechs[index],
      name: name
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
  //https://stackoverflow.com/questions/4974238/javascript-equivalent-of-pythons-format-function
  return `(${phoneNumb[0]}${phoneNumb[1]}) ${phoneNumb[2]}${phoneNumb[3]}${phoneNumb[4]}${phoneNumb[5]}${phoneNumb[6]}-${phoneNumb[7]}${phoneNumb[8]}${phoneNumb[9]}${phoneNumb[10]}`;
} 


//let aaa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
//console.log(generatePhoneNumber(aaa));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {

  if ((lineA > (lineB - lineC)) && (lineA < (Math.abs(lineB + lineC))) 
  && (lineB > (lineA - lineC)) && (lineB < (Math.abs(lineA + lineC))) 
  && ((lineC > (lineA - lineB))) && (lineC < (Math.abs(lineA + lineB)))) {
    return true;
  };
  return false;
};

//console.log(triangleCheck(10, 14, 8));

/*
  Para que seja possível formar um triângulo, é necessário que a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas.

Para obter o valor absoluto de um número em JavaScript, pesquise pela função Math.abs.

O retorno da sua função deverá ser um booleano.

Exemplo: o retorno de triangleCheck(10, 14, 8) deverá ser true.

*/

// Desafio 13
function hydrate(toDrink) {
  // seu código aqui
  let numbers = toDrink.replace(/\D/g, '');
  let total = 0;
  let response = '';
  for (let index = 0; index < numbers.length; index += 1) {
    total += parseInt(numbers[index], 10);
  }
  if (total > 1) {
    response = `${total} copos de água`;
  } else response = `${total} copo de água`;
  return response;
}
//console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};