// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ')
}

// Desafio 4
function concatName(arr) {
  let str = ''
  str = str + (arr[arr.length - 1]) + ', ' + (arr[0])
  return str
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties * 1)
}

// Desafio 6
function highestCount(arr) {
  let count = 0
  for (index = 0; index < arr.length; index++) {
    let highernum = 0
    for (i = 0; i < arr.length; i++) {
      if (arr[index] < arr[i]) {
        highernum = highernum + 1
      }
    }
    if (highernum === 0) {
      count = count + 1
    }
  }
  return count
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1'
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2'
  } else {
    return 'os gatos trombam e o rato foge'
  }
}

// Desafio 8
function fizzBuzz(str) {
  let str2 = []
  for (index = 0; index < str.length; index++) {
    if (str[index] % 3 === 0 && str[index] % 5 === 0) {
      str2.push('fizzBuzz')
    } else if (str[index] % 3 === 0) {
      str2.push('fizz')
    } else if (str[index] % 5 === 0) {
      str2.push('buzz')
    } else {
      str2.push('bug!')
    }
  }
  return str2
}

// Desafio 9
function encode(encodestr) {
  let codestr = ''
  let code = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
for (index = 0; index < encodestr.length; index++) {
  if (code[encodestr[index]] === undefined) {
    codestr = codestr + encodestr[index]
  } else {
    codestr = codestr + code[encodestr[index]]
  }
}
return codestr
}

function decode(decodestr) {
  let decodedstr = ''
  let code1 = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  }
  for (let index = 0; index < decodestr.length; index++) {
    if (code1[decodestr[index]] === undefined) {
      decodedstr = decodedstr + decodestr[index]
    } else {
      decodedstr = decodedstr + code1[decodestr[index]]
    }
  }
  return decodedstr
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
