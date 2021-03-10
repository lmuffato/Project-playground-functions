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
function generatePhoneNumber(arrayNumber) {
  if (arrayNumber.length !== 11){
    return 'Array com tamanho incorreto.'
  }
  for (let index = 0; index < arrayNumber.length; index += 1) {
    let count = 0;
    for (let indexNumber = 0; indexNumber < arrayNumber.length; indexNumber += 1) {
      if (arrayNumber[index] === arrayNumber[indexNumber]) {
        count += 1;
      } if (arrayNumber[index] < 0 || arrayNumber[index] > 9 || count >=3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
    return `(${arrayNumber[0]}${arrayNumber[1]}) ${arrayNumber[2]}${arrayNumber[3]}${arrayNumber[4]}${arrayNumber[5]}${arrayNumber[6]}-${arrayNumber[7]}${arrayNumber[8]}${arrayNumber[9]}${arrayNumber[10]}`
}

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
function hydrate( string ) {
  let inter = string.match(/\d+/g);
  let numbers = 0;
  for (let key in inter) {
    numbers += parseInt(inter[key]);
    }  
  return numbers + ' copos de água';
  // seu código aqui
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
console.log(triangleCheck(10, 14, 8));
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
