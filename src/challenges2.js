// Função auxiliar
// Essa função de ordenação eu aprendi e apliquei conforme
// uma postagem no Stack Overflow: https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
function compare(a, b) {
  if (a.tech < b.tech) {
    return -1;
  }
  if (a.tech > b.tech) {
    return 1;
  }
  return 0;
}

// Desafio 10
function techList(arrayList, name) {
  let newArrayList = [];
  if (arrayList.length > 0) {
    for (let index = 0; index < arrayList.length; index += 1) {
      newArrayList.push({ tech: arrayList[index], name });
    }
  } else {
    return 'Vazio!';
  }

  return newArrayList.sort(compare);
}

// Função auxiliar
function highestValue(arrayNumbers) {
  let larger;
  let largerValueIndex;

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (index === 0 || arrayNumbers[index] > larger) {
      larger = arrayNumbers[index];
      largerValueIndex = index;
    }
  }

  return largerValueIndex;
}

function compareFull(index, compareIndex, arr, arrCompare) {
  if ((index !== compareIndex) && (arr === arrCompare)) {
    return 1;
  }
  return 0;
}

function moreIsRepeated(arrayNumbers) {
  let numbers = [...arrayNumbers];

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    for (let compareIndex = 0; compareIndex < arrayNumbers.length; compareIndex += 1) {
      numbers[index] += compareFull(
        index,
        compareIndex,
        arrayNumbers[index],
        arrayNumbers[compareIndex],
      );
    }
  }

  let index = highestValue(numbers);

  return arrayNumbers[index];
}

function validation(arr) {
  let err = 'não é possível gerar um número de telefone com esses valores';
  let countRepeated = 0;

  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] < 0 || countRepeated >= 3 || arr[index] > 9) {
      return err;
    }
  }

  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] === moreIsRepeated(arr)) {
      countRepeated += 1;
    }
  }
}

// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  let formatedPhoneNumber = '';
  const err = 'não é possível gerar um número de telefone com esses valores';

  validation(arrayNumbers);

  formatedPhoneNumber = formatedPhoneNumber.concat('(');
  for (let index = 0; index < 2; index += 1) {
    formatedPhoneNumber = formatedPhoneNumber.concat(arrayNumbers[index]);
  }

  formatedPhoneNumber = formatedPhoneNumber.concat(') ');

  for (let index = 2; index < 7; index += 1) {
    formatedPhoneNumber = formatedPhoneNumber.concat(arrayNumbers[index]);
  }

  formatedPhoneNumber = formatedPhoneNumber.concat('-');

  for (let index = 7; index < 11; index += 1) {
    formatedPhoneNumber = formatedPhoneNumber.concat(arrayNumbers[index]);
  }

  return formatedPhoneNumber;
}

// Desafio 12
function triangleCheck(ladoA, ladoB, ladoC) {
  let isTriangle = true;

  if (ladoA > (ladoB + ladoC)) {
    return false;
  }

  if (ladoB > (ladoA + ladoC)) {
    return false;
  }

  if (ladoC > (ladoA + ladoB)) {
    return false;
  }

  if (ladoA < Math.abs(ladoB - ladoC)) {
    return false;
  }

  if (ladoB < Math.abs(ladoA - ladoC)) {
    return false;
  }

  if (ladoC < Math.abs(ladoA - ladoB)) {
    return false;
  }

  return isTriangle;
}

// Desafio 13
function hydrate(stringPhrase) {
  let newStringPhrase = stringPhrase.replace(/\D/g, '').split('');
  let sum = 0;
  let result;

  for (let index = 0; index < newStringPhrase.length; index += 1) {
    sum += parseInt(newStringPhrase[index], 10);
  }

  if (sum === 0 || sum === 1) {
    result = sum.toString().concat(' copo de água');
    return result;
  }

  result = sum.toString().concat(' copos de água');
  return result;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Wanderson'));

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

console.log(triangleCheck(10, 14, 8));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
