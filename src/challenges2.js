// Desafio 10
function techList(tech, name) {
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
  } return listTech;
}

// Desafio 11
function generatePhoneNumber(p) {
  if (p.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index <= p.length; index += 1) {
    let count = 0;
    for (let indexCount = 0; indexCount < p.length; indexCount += 1) {
      if (p[index] === p[indexCount]) {
        count += 1;
      }
    }
    if (p[index] < 0 || p[index] > 9 || count >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  } return ('(' + p[0] + p[1] + ')' + ' ' + p[2] + p[3] + p[4] + p[5] + p[6] + '-' + p[7] + p[8] + p[9] + p[10]);
}

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
//Como visto em: https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994
  let water = 0
  for (let index = 0; index < quantity.length; index += 1) {
    let frase = parseInt (quantity[index]);
    water += frase;
}
  if (water === 1) {
    return water + ' copo de água';
  } else if (water > 1) {
    return water + ' copos de água';
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
