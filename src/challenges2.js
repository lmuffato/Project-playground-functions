// Desafio 10
function techList(arr, name) {
  orgarr = arr.sort();
  let techsNames = [];
  for (let index = 0; index < orgarr.length; index++) {
    techsNames.push(
      {
        tech: orgarr[index],
        name: name,
      }
    );
  }

  if (arr.length === 0){
    return 'Vazio!'
  }
  return techsNames;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA >= lineB + lineC) {
  return false 
  } else if (lineB >= lineA + lineC) {
    return false
  } else if (lineC >= lineA + lineB) {
    return false
  } else {
    return true
  }
}

// Desafio 13
function hydrate(str) {
  let waterCups = 0;
  let beverages = str.split(' ');
  for (let index = 0; index < beverages.length; index++) {
    if (parseInt(beverages[index])) {
      waterCups += parseInt(beverages[index])
    }
  }
  if (waterCups > 1) {
    return waterCups + ' copos de água';
  } else {
    return waterCups + ' copo de água'
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
