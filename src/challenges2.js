// Desafio 10
function techList() {
  let 
}

// Desafio 11

// Dividir a função em problemas menores. 

// 1 - Descobrir se há repetição no array.
function findRepetition (arrayOfNumbers) {   
  let repetition = false;   
    return arrayOfNumbers.reduce( (countNumbers, numbers) => {
        countNumbers[numbers] = ++countNumbers[numbers] || 1; {
          if (countNumbers[numbers] >= 3) {
            repetition === true;
          }
        }
        return repetition;
    }, {}); 
}


// 2 - Acessar os valores do array.

function theExcludentConditions (arrayOfNumbers) {
  let excludentConditions = false;
  for (let key of arrayOfNumbers) {
    if(arrayOfNumbers[key] < 0 || arrayOfNumbers[key] > 9) {
      excludentConditions === true;
    }
  }
  return excludentCondition;
}

// 3 - Transformar em string.

function convertArrayToString (arrayOfNumbers, firstIndex, secondIndex) {
  let result = ' ';

  for (let index = firstIndex; index <= secondIndex; index += 1) {
    result += arrayOfNumbers[index].toString();
  }
  return result;
}

function generatePhoneNumber(phoneNumber) {
 
  let message = ' ';
  phoneNumber.length === 11;

    if (phoneNumber.length != 11) {
      message = 'Array com tamanho incorreto.';
    }
    else if (theExcludentConditions(phoneNumber) === true || findRepetition(phoneNumber) === true) {
      message = 'não é possível gerar um número de telefone com esses valores'; 
    } else {
      message += `(${convertArrayToString(phoneNumber,0,1)}) ` 
      `${convertArrayToString(phoneNumber,2,3,4,5,6)}-${convertArrayToString(phoneNumber,7,8,9,10)}`;
    }
  return message;
}

// Referências utilizadas para resolução do Desafio 11 (sobre laço for...of e toString):
// https://woliveiras.com.br/posts/laços-de-repetição-for-for-in-for-of/
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/toString
// https://stackoverflow.com/questions/19395257/how-to-count-duplicate-value-in-an-array-in-javascript/19395302#19395302 

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
