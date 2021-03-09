// Desafio 10
function techList(array, namE) {
  if (array === 0) {
    return 'Vazio!';
  }
  let listTech = [];
  let arrayOrd = array.sort();
  for (let key in arrayOrd) {
    listTech.push(
      {
        tech: arrayOrd[key],
        name: namE,
      },
    );
  }
  return listTech;
}

// Desafio 11
/*function generatePhoneNumber(array) {
  let phone = '';
  let cont = 0;
  if ( array.length != 11 ) {
    return "Array com tamanho incorreto!"
  }
  for (let index = 0; index < array.length; index+=1) {
    switch (cont) {
      case 0: 
      console.log("ZERO")
      phone[cont] = '(' + phone;
      cont += 1;
      break;
      case 3: 
      phone[cont] = ')' + phone;
      cont += 1;
      break;
      case 4: 
      phone[cont] = ' ' + phone;
      cont += 1;
      break;
      case 10: 
      phone[cont] = '-' + phone;
      cont += 1;
      break;
      default:
      phone = array[cont] + phone;
      cont += 1;
    }
  }
  return phone;
  
  // seu código aqui
}*/

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)){
      if (lineC < lineB + lineA && lineC > Math.abs(lineB - lineA)) {
        return true;
      }
    }
  }
    return false;
 
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
//console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
console.log(triangleCheck(10, 14, 8));

module.exports = {
 // generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
