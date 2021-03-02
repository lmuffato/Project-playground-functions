// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === 'true' && param2 === 'true')
    return true;
} else {
    return false;
}

// Desafio 2
function calcArea(base, height) {
  return base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
  // Não entendi o porque!! Nem no Overflow tava tão "fácil" assim
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let lastName = array.length-1;
  let newArray = array[lastName], array[0];
  return newArray;
}

// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
  let resultWins = (wins * 3);
  return(resultWins + ties);
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  for (let index = 0; index < array.length; index += 1){
    let newArray = array[index];

      if (newArray[index] === array[index]) {
        let sumHighestCount += 1;
      }

  }

  return sumHighestCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (cat1 > cat2) {
    return 'cat2'
  } else if (cat1 < cat2) {
    return 'cat1'
  } else {
    return "os gatos trombam e o rato foge"
  }

}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let arrayFizzBuzz = []
  for (let index = 0; index < array.length; index += 1){
    let testFizzBuzz = array[index]
      if (testFizzBuzz / 3 && testFizzBuzz / 5) {
        arrayFizzBuzz.push("fizzBuzz")
      } else if (testFizzBuzz / 5) {
        arrayFizzBuzz.push("buzz")
      } else if (testFizzBuzz / 3) {
        arrayFizzBuzz.push("fizz")
      } else {
        arrayFizzBuzz.push("bug!")
      }
  }
  return arrayFizzBuzz

}

// Desafio 9
function encode(string) {
  // seu código aqui
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
    }


}
function decode(array) {
  // seu código aqui
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
