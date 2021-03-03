// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let arr = [];
  let i = 0;
  let a;
  let b;
  for (let index = 0; index < string.length; index += 1) {
    a = string[index];
    if (string[index] === ' ') {
      i += 1;
    }

    if (arr[i] === undefined) {
      if (string[index] !== ' ') {
        arr[i] = string[index];
      }
    } else {
      arr[i] += string[index];
    }
  }
  return arr;
}

// Desafio 4
function concatName(names) {
  return names[names.length - 1] + ' ' + names[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(array) {
  let conta = 0;
  let maior = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === maior) {
      conta += 1;
    } else if (array[index] > maior) {
      maior = array[index];
      conta = 1;
    }
  }
  return conta;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = mouse - cat1;
  let distanciaCat2 = mouse - cat2;

  if (Math.abs(distanciaCat1) < Math.abs(distanciaCat2)) {
    return 'cat1';
  } else if (Math.abs(distanciaCat2) < Math.abs(distanciaCat1)) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let retorno = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 !== 0) {
      retorno[index] = 'fizz';
    } else if (array[index] % 5 === 0 && array[index] % 3 !== 0) {
      retorno[index] = 'buzz';
    } else if (array[index] % 5 === 0 && array[index] % 3 === 0) {
      retorno[index] = 'fizzBuzz';
    } else {
      retorno[index] = 'bug!';
    }
  }
  return retorno;
}

// Desafio 9
function encode(string) {
  let codigo;
  for (let index = 0; index < string.length; index += 1) {
    if (codigo === undefined) {
      switch (string[index]) {
    case 'a':
      codigo = '1';
      break;
    case 'e':
      codigo = '2';
      break;
    case 'i':
      codigo = '3';
      break;
    case 'o':
      codigo = '4';
      break;
    case 'u':
      codigo = '5';
      break;
    default:
      codigo = string[index];
      } //fecha swich if

    } //fecha if
    else {
      switch (string[index]) {
        case 'a':
          codigo += '1';
          break;
        case 'e':
          codigo += '2';
          break;
        case 'i':
          codigo += '3';
          break;
        case 'o':
          codigo += '4';
          break;
        case 'u':
          codigo += '5';
          break;
        default:
          codigo += string[index];
      }
    }
  }
  return codigo;
}

function decode(string) {
  let codigo;
  for (let index = 0; index < string.length; index += 1) {
    if (codigo === undefined) {
      switch (string[index]) {
        case 'a':
          codigo = '1';
          break;
        case 'e':
          codigo = '2';
          break;
        case 'i':
          codigo = '3';
          break;
        case 'o':
          codigo = '4';
          break;
        case 'u':
          codigo = '5';
          break;
        default:
          codigo = string[index];
      } //fecha swich if

    } //fecha if
    else {
      switch (string[index]) {
        case '1':
          codigo += 'a';
          break;
        case '2':
          codigo += 'e';
          break;
        case '3':
          codigo += 'i';
          break;
        case '4':
          codigo += 'o';
          break;
        case '5':
          codigo += 'u';
          break;
        default:
          codigo += string[index];
      } //fecha swich els
    } //fecha else
  } //fecha for
  return codigo;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};

//console.log(splitSentence('foguete'));
//console.log(concatName(['captain', 'my', 'captain']));
//console.log(footballPoints(0,0));
//console.log(highestCount([0,0,0]));
//console.log(catAndMouse(1,3,2));
//console.log(fizzBuzz([9, 25]));
console.log(encode('hi there!'));
console.log(decode('h3 th2r2!'));
