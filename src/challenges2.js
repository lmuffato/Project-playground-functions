// Desafio 10
function techList(technologies, studantsname) {
  let arrayOfTechs = [];
  for (let index = 0; index < technologies.sort().length; index += 1) {
    let newObject = { tech: technologies[index], name: studantsname };
    arrayOfTechs.push(newObject);
  }
  if (technologies.length === 0) {
    arrayOfTechs = 'Vazio!';
  }
  return arrayOfTechs;
}

// Desafio 11
//let phoneNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]
//function arrayLength(phoneNumber) {
  //if (phoneNumber.length !== 11){
  //  return "Array com tamanho incorreto";
 // }
//} 
//function numberNotValid(phoneNumber){
  //for(let index = 0; index < phoneNumber.length; index += 1){
   //If (phoneNumber[index] < 0 || phoneNumber[index] > 9){
     //return 'não é possivel gerar um número com esses valores';
   //} 
  //}
//}
//function generatePhoneNumber() {
//}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  } else if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    return true;
  } else if (lineC < lineB + lineA && lineC > Math.abs(lineA - lineB)) {
    return true;
  }
  return false;
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
