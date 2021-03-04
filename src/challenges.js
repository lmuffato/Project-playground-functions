// Desafio 1 OK
function compareTrue(param1, param2) {
  return param1 && param2;
}

// Desafio 2 OK
function calcArea(base, height) {
  return base * height / 2;
}

// Desafio 3 OK
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4 WHY?
function concatName(array) {
  let lastName = array[array.length-1];
  let firstName = [array[0]];
  let newArray = lastName + ',' + ' ' + firstName;
  // let resposta = newArray.concat(firstName);
  return newArray
}

// Desafio 5 OK
function footballPoints(wins,ties) {
  let resultWins = (wins * 3);
  return(resultWins + ties);
}

// Desafio 6 AGORA FOI!
function highestCount(array) {
  let highNumber = Math.max(...array);
  let sumHighestCount = 0
  for (let index = 0; index < array.length; index += 1){
      if (array[index] === highNumber) {
        sumHighestCount += 1;
      }
    }
    return sumHighestCount;
}

// Desafio 7 OK
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse)
  let distanceCat2 = Math.abs(cat2 - mouse)
  if (distanceCat1 > distanceCat2) {
    return 'cat2'
  } else if (distanceCat1 < distanceCat2) {
    return 'cat1'
  } else {
    return "os gatos trombam e o rato foge"
  }
}

// Desafio 8 OK
function fizzBuzz(array) {
  let arrayFizzBuzz = []
  for (let index = 0; index < array.length; index += 1){
    let testFizzBuzz = array[index]
      if (testFizzBuzz % 3 === 0 && testFizzBuzz % 5 === 0) {
        arrayFizzBuzz.push("fizzBuzz")
      } else if (testFizzBuzz % 5 === 0) {
        arrayFizzBuzz.push("buzz")
      } else if (testFizzBuzz % 3 === 0) {
        arrayFizzBuzz.push("fizz")
      } else {
        arrayFizzBuzz.push("bug!")
      }
  }
  return arrayFizzBuzz

}

// Desafio 9
// PQ Q TÁ DANDO ERRO NO PUSH?
function encode(string) {
  let codingString = [];
  for (let index = 0; index < string.length; index += 1){
     codingString.push(string[index])
      switch (string[index]) {
        case string[index] === "a":
          codingString.replace(/a/i,'1');
          break;

        case string[index] === "e":
        codingString.replace(/e/i,'2');
        break;
       
        case string[index] === "i":
          codingString.replace(/i/i,'3');
          break;

        case string[index] === "o":
        codingString.replace(/o/i,'4');
        break;

        case string[index] === "u":
        codingString.replace(/u/i,'5');
        break;

        default:
          codingString.replace(string[index])
      }
      return codingString
    }
}

function decode(string) {
  let decodingString = [];
  for (let index = 0; index < string.length; index += 1){
    decodingString.push(string[index])
      switch (string[index]) {
        
        case string[index] === '1':
        decodingString.replace(/a/i,'a');
        break;

        case string[index] === '2':
        decodingString.replace(/e/i,'e');
        break;
       
        case string[index] === "3":
        decodingString.replace(/i/i,'i');
        break;

        case string[index] === "4":
        decodingString.replace(/o/i,'o');
        break;

        case string[index] === "5":
        decodingString.replace(/u/i,'u');
        break;

        default:
        decodingString.replace(string[index])
      }
    }
    return decodingString

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
