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
  let lastName = array.length-1;
  let newArray = [lastName]
  newArray.concat(array[0]);
  return newArray;
}

// Desafio 5 OK
function footballPoints(wins,ties) {
  let resultWins = (wins * 3);
  return(resultWins + ties);
}

// Desafio 6
function highestCount(array) {
  // for (let index = 0; index < array.length; index += 1){
  //   let newArray = array[index];

  //     if (newArray[index] === array[index]) {
  //       let sumHighestCount += 1;
  //     }
// usar 2 fors, um para ver qual q é o maior, outro para contar cada ida
  // }

  // return sumHighestCount;
}

// Desafio 7
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

// Desafio 8
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
function encode(string) {
  for (index = 0; index < string.length; index += 1){
    let codingString = string[index]
      switch (string[index]) {
        case string[index] === "a":
          codingString.push('1');
          break;

        case string[index] === "e":
        codingString.push('2');
        break;
       
        case string[index] === "i":
          codingString.push('3');
          break;

        case string[index] === "o":
        codingString.push('4');
        break;

        case string[index] === "u":
        codingString.push('5');
        break;

        default:
          codingString.push(string[index])
      }
      return codingString
      console.log(codingString)
    }
}

function decode(array) {
  for (index = 0; index < string.length; index += 1){
    let decodingString = string[index]
      switch (string[index]) {
        
        case string[index] === '1':
        decodingString.push('a');
        break;

        case string[index] === '2':
        decodingString.push('e');
        break;
       
        case string[index] === "3":
        decodingString.push('i');
        break;

        case string[index] === "4":
        decodingString.push('o');
        break;

        case string[index] === "5":
        decodingString.push('u');
        break;

        default:
        decodingString.push(string[index])
      }
      return codingString
    }

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
