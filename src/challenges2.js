// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11 - PENDENTE!
function generatePhoneNumber(array) {
  /*let repete = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9 ||  {
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
    
  } */ 

} 

console.log(generatePhoneNumber([0,1,2,3,]))

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
   if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
     return true;
   } else {
     return false;
   }
}
console.log(triangleCheck(10, 14, 8));
console.log(triangleCheck(50, 10, 11));
console.log(triangleCheck(7, 20, 10));

// Desafio 13
function hydrate(string) {
  let numbers = string.replace(/[^0-9]/g,''); // string vira só número (mas continua sendo string)
  let numbersArray = [] //array para armazenar
  let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] // array para comparar
  let soma = 0;
  for(let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (numbers[i] == array[j]) {
        numbersArray.push(array[j])
      }
    }
  }
  for (let i = 0; i < numbersArray.length; i ++) {
    soma = soma + numbersArray[i]
    if (soma = 1) {
      return soma + ' copo de água'
    } else if (soma > 1) {
      return soma + ' copos de água'
    }
  }
}

console.log(hydrate('1 cerveja'));
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));
console.log(hydrate('2 vodkas e 8 tequilas'));


module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
