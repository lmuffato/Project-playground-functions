// Desafio 10
const techList = (tech, name) => {
  if (tech.length < 1) {
    return 'Vazio!';
  }
  let objects = tech.sort();
  let listTech = [];
  for (let index = 0; index < objects.length; index += 1) {
    listTech[index] = {
      tech: objects[index],
      name,
    };
  }
  return listTech;
};

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
/* [
  { tech: 'CSS', name: 'Lucas' },
  { tech: 'HTML', name: 'Lucas' },
  { tech: 'JavaScript', name: 'Lucas' },
  { tech: 'Jest', name: 'Lucas' },
  { tech: 'React', name: 'Lucas' }
] */
console.log(techList([], 'Lucas')); // Vazio!

// Desafio 11
const checkLength = (p) => ((p.length !== 11));

const checkNumbers = (p) => {
  let result = false;
  for (let key = 0; key < p.length; key += 1) {
    if (p[key] < 0 || p[key] > 9) {
      result = true;
    }
  }
  return result;
};

console.log(checkNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0]));

const checkRepetition = (p) => {
  let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let result = false;
  for (let index = 0; index < p.length; index += 1) {
    count[p[index]] += 1;
  }
  for (let index = 0; index < count.length; index += 1) {
    if (count[index] >= 3) {
      result = true;
    }
  }
  return result;
};

function generatePhoneNumber(p) {
  if (checkLength(p) === true) {
    return 'Array com tamanho incorreto.';
  } if (checkNumbers(p) === true || checkRepetition(p) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return (`(${p[0]}${p[1]})${p[2]}${p[3]}${p[4]}${p[5]}${p[6]}-${p[7]}${p[8]}${p[9]}${p[10]}`);
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1])); // (12) 34567-8901
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // Array com tamanho incorreto.
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11])); // não é possível gerar um número de telefone com esses valores
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 0, 0, 0])); // não é possível gerar um número de telefone com esses valores

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let resultado;
  if ((lineA < lineB + lineC) && (lineB < lineA + lineC) && (lineC < lineA + lineB)) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

// Desafio 13
function hydrate(waterQ) {
  let quantity = waterQ.match(/\d+/g);
  // Como visto em: https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994
  let water = 0;
  for (let index = 0; index < quantity.length; index += 1) {
    let frase = Number(quantity[index]);
    water += frase;
  }
  if (water === 1) {
    return `${water} copo de água`;
  } if (water > 1) {
    return `${water} copos de água`;
  }
}
console.log(hydrate('1 cerveja'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
