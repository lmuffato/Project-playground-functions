// Desafio 10
function techList(techName, name) {
  if (techName.length === 0) {
    return 'Vazio!';
  }
  let list = [];
  techName.sort(); // ordenar;
  for (let index = 0; index < techName.length; index += 1) {
    list.push({ tech: techName[index], name }); // empurrar dentro do array
  } // name - propriedade do JS: https://www.w3schools.com/js/js_objects.asp
  return list;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
// function triangleCheck(lineA, lineB, lineC) {
function sideOne(lineA, lineB, lineC) {
  let side1 = false;
  if ((lineA > (lineB - lineC)) && (lineA < Math.abs(lineB + lineC))) {
    side1 = true;
  }
  return side1;
}
function sideTwo(lineA, lineB, lineC) {
  let side2 = false;
  if ((lineA > (lineB - lineC)) && (lineA < Math.abs(lineB + lineC))) {
    side2 = true;
  }
  return side2;
}
function sideThree(lineA, lineB, lineC) {
  let side3 = false;
  if ((lineC > (lineA - lineB)) && (lineC < Math.abs(lineA + lineB))) {
    side3 = true;
  }
  return side3;
}
function triangleCheck(lineA, lineB, lineC) {
  let value1 = sideOne(lineA, lineB, lineC);
  let value2 = sideTwo(lineA, lineB, lineC);
  let value3 = sideThree(lineA, lineB, lineC);
  if (value1 && value2 && value3) {
    return true;
  }
  return false;
}
console.log(triangleCheck(10, 10, 15));

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
