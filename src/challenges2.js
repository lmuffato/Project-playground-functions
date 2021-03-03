// Desafio 10
function techList(array, name) {
  let retorno = [];
  let objeto = {
    tech: '',
    name: name,
  };
  for (let index in array) {
    objeto.tech = array[index];
    retorno[index] = objeto;
  }
  return retorno;
}

// Desafio 11
function generatePhoneNumber(array) {

  let count = 0;
  let number = '(';
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (i = 0; i < array.length; i += 1) {
    if (array[i] > 9 || array[i] < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    count = 0;
    for (let j = 1; j < array.length; j += 1) {
      if (array[j] === array[i]) {
        count += 1;
        if (count >= 3) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
  }
  var k;
  for (let k = 0; k < array.length; k += 1) {
    if (k === 2) {
      number += ') ';
    } else if (k === 7) {
      number += '-';
    }
    number += array[k];
  }
  return number;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  //medida de uma lado deve ser menor que a soma da medida dos outros 2 e maior que o valor absoluto entre os dois
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB && lineA > Math.abs(lineB - lineC) &&
    lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineA - lineB)) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(string) {
  var values = string.match(/\d+/gm);
  var arrarNumbers = [];
  var sum = 0;
  for (let i = 0; i < values.length; i += 1) {
    arrarNumbers[i] = +values[i];
  }

  for (i = 0; i < values.length; i += 1) {
    sum += arrarNumbers[i];
  }

  return sum + ' copos de água';
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
//console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],"Lucas"));
//console.log(generatePhoneNumber([3,1,9,8,5,3,0,1,9,5,8]));
//console.log(triangleCheck(1,2,3));
console.log(hydrate('1 cerveja'));
