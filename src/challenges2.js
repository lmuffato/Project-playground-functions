// Desafio 10
function techList(stringArray, name) {
  let arrayObjects = [0];
  for (let index = 0; index < stringArray.length; index += 1) {
    let objects = {
      tech: stringArray[index],
      name: name
    };
    arrayObjects[index] = objects;
  }
  if (arrayObjects.length >= 5) {
    arrayObjects.sort(function (a, b) {  //Entrei no MDN para entender sobre o comando sort de array, e lá tem essa explicação de como ordenar objetos.
      if (a.tech > b.tech) {
        return 1;
      }
      if (a.tech < b.tech) {
        return -1;
      }
      return 0;
      });
    return arrayObjects;
  } else if (arrayObjects.tech === undefined) {
    return 'Vazio!';
  }
}

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
