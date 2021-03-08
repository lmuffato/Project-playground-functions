// Challenge 10
function sortArray(arrayOfObjects) {
  arrayOfObjects.sort(function (a, b) {
    if (a.tech > b.tech) {
      return 1;
    }
    if (a.tech < b.tech) {
      return -1;
    }
    return 0;
  });
  return arrayOfObjects;
}

function techList(technologiesArray, name) {
  let arrayOfObjects = [];

  if (technologiesArray.length === 0) {
    return ('Vazio!');
  }

  for (let index = 0; index < technologiesArray.length; index += 1) {
    let object = {
      tech: technologiesArray[index],
      name,
    };
    arrayOfObjects.push(object);
  }
  let sortedArray = sortArray(arrayOfObjects);

  return sortedArray;
}

let array = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
let name = 'Lucas';
console.log(techList(array, name));

// Challenge 11
function generatePhoneNumber() {
  // seu código aqui
}

// Challenge 12
function triangleCheck() {
  // seu código aqui
}

// Challenge 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
