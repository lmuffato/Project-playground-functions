// Desafio 10
function techList(array, name) {
  let aux = [];
  if (array.length === 0) {
    return 'Vazio!';
  }
  array.sort();
  for (let index = 0; index < array.length; index += 1) {
    let student = {
      tech: array[index],
      name,
    };
    aux[index] = student;
  }
  return aux;
}

// Desafio 11
// function lessZeroMoreNine(array) {
//   for (let index = 0; index < array.length; index += 1) {
//     if (array[index] < 0 || array[index] > 9) {
//       return true;
//     }
//   }
//   return false;
// }
// function doesItRepeat(array) {
//   let counter = 0;
//   for (let index = 0; index < array.length; index += 1) {
//     for (let jndex = 0; jndex < array.length; jndex += 1) {
//       if (array[index] === array[jndex]) {
//         counter += 1;
//       }
//     }
//     if (counter >= 3) {
//       return true;
//     }
//   }
//   return false;
// }
// function generatePhoneNumber(array) {
//   let aux = '';
//   aux += `(${array[0]}${array[1]}) `;
//   for (let index = 2; index < array.length; index += 1) {
//     aux += array[index];
//     if (index === 6) {
//       aux += '-';
//     }
//   }
//   if (lessZeroMoreNine(array) === true || doesItRepeat(array) === true) {
//     return 'não é possível gerar um número de telefone com esses valores';
//   }
//   return aux;
// }
// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  // generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
