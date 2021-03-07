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
  
  console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Diego'));



// Desafio 11
function generatePhoneNumber() {
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
