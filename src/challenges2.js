// Desafio 10
function techList(Arraytech, name) {
  if (Arraytech === 0) {
    return 'Vazio!';
  }
  
  if (Arraytech !== 0) {
    let orderedArray = Arraytech.sort();
    let skills = [];

    for (let index = 0; index < orderedArray.length; index += 1) {
      skills.push({
        tech: orderedArray[index],
        name: name,
      });
    }

    return skills;
  }
}

// Desafio 11
function generatePhoneNumber(numericArray) {
  let ddd =['(', , ,')'];
  let fiveNumbers = [];
  let finalPart = ['-'];

  let phoneNumber = [];
  

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
