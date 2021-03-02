// Desafio 1
function compareTrue(parameter1, parameter2) {
  // seu código aqui
  let compara;
  if (parameter1 && parameter2 === true){
    compara = true;
  }
  else {
    compara = false;
  }
  return compara;
}

console.log(compareTrue(true, true))

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let calculo;
  calculo = (base * height) / 2
  return calculo
}

console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  let separa = str.split(" ");
  return separa
}

console.log(splitSentence("foguete"))

// Desafio 4
function concatName(list) {
  // seu código aqui
  let lastName;
  let firstName;
  let concat;
  for(let index = 0; index < list.length; index += 1){
    if (index === list.length - 1){
      lastName = list[index];
    }
    else if (index === 0){
      firstName = list[index];
    }
  }
  concat = lastName + ", " + firstName
  return concat
}

let arrayNames = ['captain', 'my', 'captain']

console.log(concatName(arrayNames));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let calc = (wins * 3) + (ties * 1)
  return calc
}

let win = 0;
let tie = 0;

console.log(footballPoints(win, tie))

// Desafio 6
function highestCount(number) {
  // seu código aqui
  let higher = number[0]
  let repet = 0;
  for (let index = 0; index < number.length; index += 1){
    if (higher < number[index]){
      higher = number [index];
    }
  }
  for (let index = 0; index < number.length; index += 1){
    if (number[index] === higher){
      repet += 1;
    }
  }
  return repet
}

let arrayNumbers = [0, 0, 0]

console.log(highestCount(arrayNumbers))

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let winner;
  if ((cat2 - mouse) < (cat1 - mouse)){
    winner = 'cat2';
  }
  else if ((cat2 - mouse) > (cat1 - mouse)){
    winner = 'cat1';
  }
  else if ((cat2 - mouse) === (cat1 - mouse)){
    winner = 'os gatos trombam e o rato foge';
  }
  return winner
}

let mouse = 0; 
let cat1 = 12;
let cat2 = 12;

console.log(catAndMouse(mouse, cat1, cat2));

// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
  let result = [];
  for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0){
      result[index] = "fizzBuzz";
    }
    else if (numbers[index] % 3 != 0 && numbers[index] % 5 != 0){
      result[index] = "bug!";
    }
    else if (numbers[index] % 3 === 0){
      result[index] = "fizz";
    }
    else if (numbers[index] % 5 === 0){
      result[index] = "buzz";
    }
  }
  return result
}

let arrayNumbers2 = [7, 9];
console.log(fizzBuzz(arrayNumbers2))

// Desafio 9
function encode(param) {
  // seu código aqui
  // links estudados para a realização do código: https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176
  //                                              https://stackoverflow.com/questions/15604140/replace-multiple-strings-with-multiple-other-strings
  let vowels = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5'
  };
  
  result = param.replace(/a|e|i|o|u/g, function(param){
    return vowels[param]
  });
  return result
}
function decode(param) {
  // seu código aqui
  // links estudados para a realização do código: https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176
  //                                              https://stackoverflow.com/questions/15604140/replace-multiple-strings-with-multiple-other-strings
  let numbers = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u'
  };
  
  result = param.replace(/1|2|3|4|5/g, function(param){
    return numbers[param]
  });
  return result
}

console.log("Encode: " + encode("Hi there"))
console.log("Decode: " + decode("H3 th2r2"))

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
