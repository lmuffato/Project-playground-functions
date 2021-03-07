

// Desafio 10
function techList(tech, name) {

  let techs = [];
  techs.sort();

if (techs.length === 0){
  return 'Vazio!'
}

for (let indexTech = 0; indexTech < tech.length; indexTech += 1){
    techs.push(
    { tech: tech[indexTech],   
      name: name, 
    });
  }

  return techs
}


numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];

let telephoneNumber;

let lowerNumber = Math.min.apply(Math,numbers)

let repeatedNumber = 0;

for (let repeatIndex = 0; repeatIndex < numbers.length; repeatIndex += 1){
  for (let compareIndex = 0; compareIndex < numbers.length; compareIndex += 1){
    if (numbers[repeatIndex] === numbers[compareIndex]){
      repeatedNumber += 1;
    } else {
      repeatedNumber -= 1;
    }
      if (repeatedNumber <-8){
        repeatedNumber === 0;
    }
  } 
}

console.log(repeatedNumber)


if (numbers.length > 11 || numbers.length < 11){
  telephoneNumber = "Array com tamanho incorreto.";
} else if (lowerNumber < 0 || repeatedNumber > 2){
  telephoneNumber = "não é possível gerar um número de telefone com esses valores";
}

console.log(lowerNumber)



function generatePhoneNumber(numbers) {




  // seu código aqui
}

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