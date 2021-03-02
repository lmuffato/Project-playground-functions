// Desafio 10
function techList(array, name) {
  // esse codigo foi baseado por essa discussão no stack overflow https://stackoverflow.com/questions/5868850/creating-list-of-objects-in-javascript
  array.sort();
  let list = [];
  if (array.length === 0)
  { 
    return 'Vazio!';
  }
  else {for (let index = 0;index < array.length;index += 1)
     {list.push({ tech: array[index], name: name })
    }
  }
  return list
}

// Desafio 11
function generatePhoneNumber(list) {
  let part1 = '';
  let part2 = '';
  let part3 = '';
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
