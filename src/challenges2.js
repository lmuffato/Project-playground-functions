// Desafio 10
function techList(arrayIn, name) {
  let exitArray = [];
  let obj = {};
  if (arrayIn.length === 0) {
    exitArray = 'Vazio!';
  } else {
    for (let key in arrayIn) {
      obj = {
        tech: arrayIn[key],
        name: name
      };
      exitArray.push(obj);
    }
  }
  return exitArray;
}
console.log(techList([], 'lucas'));

// Desafio 11
function generatePhoneNumber(numbersArray) {

}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let result = true;
  let objRules = {
    case1: lineA + lineB,
    case2: lineA + lineC,
    case3: lineB + lineC,
    case4: Math.abs(lineA - lineB),
    case5: Math.abs(lineA - lineC),
    case6: Math.abs(lineB - lineC)
  };
  if (objRules.case1 < lineC || objRules.case2 < lineB || objRules.case3 < lineA || objRules.case4 > lineC ||
    objRules.case5 > lineB || objRules.case6 > lineC) {
    result = false;
  }
  return result;
}
console.log(triangleCheck(3,4,8));
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
