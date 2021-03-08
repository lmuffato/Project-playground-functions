// Desafio 10
function techList(arrayTech, string) {
  arrayTech.sort();
  let techOrder = [];
  if (arrayTech.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < arrayTech.length; index += 1) {
    techOrder.push(
      {
        tech: arrayTech[index],
        name: string,
      },
    );
  }
  return techOrder;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Diego'));

// Desafio 11

function generatePhoneNumber(arrayPhone) {
  if (arrayPhone.length !== 11){
    return 'Array com tamanho incorreto';
  }
  let count = 0;
  for (let index in arrayPhone){
    for(let key in arrayPhone){
       if (arrayPhone[index] === arrayPhone[key]){
         count +=1;
      }
    }
    if (arrayPhone[index] < 0 || arrayPhone[index] > 9 || count >= 3){
      return 'não é possível gerar um número de telefone com esses valores';
  }
  }
  let phone = `(${arrayPhone[1]} ${arrayPhone[2]})`
`${arrayPhone[3]} ${arrayPhone[4]} ${arrayPhone[5]} ${arrayPhone[6]} ${arrayPhone[7]} `-`
${arrayPhone[8]} ${arrayPhone[9]} ${arrayPhone[0]} ${arrayPhone[1]}`;
return phone;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

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
