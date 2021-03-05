// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else
    return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base*height)/2) // retorna valor da area calculada
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ') // seu código aqui
}

// Desafio 4
function concatName(strings) {
  return strings[strings.length - 1] + ', ' + strings[0]  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties * 1))// seu código aqui
}

// Desafio 6
function highestCount(numbers) {
  let count = 0; 
    let maxNumber = 0;
    for (let index = 0; index < numbers.length; index += 1){
        if (maxNumber < numbers[index]){
            maxNumber = numbers[index]
        }
    }
    for (index = 0; index < numbers.length; index += 1){
        if (maxNumber === numbers[index]){
            count += 1;
        }
    }
    return count;// seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = cat1 - mouse;
    let distance2 = cat2 - mouse;
    if (distance1 < distance2) {
        console.log('cat1');        
    }
    if (distance1 > distance2) {
        console.log('cat2');
    }
    else if (distance1 === distance2) {
        console.log('os gatos se trombam e o rato foge');
    }// seu código aqui
}

// Desafio 8
function fizzBuzz() {
  let result = [];
    for (let index = 0; index < array.length; index += 1){
        if (array[index] % 3 === 0 && array[index] % 5 === 0){
            result.push('fizzBuzz');
        }
        if (array[index] % 3 === 0 && array[index] % 5 !== 0){
            result.push('fizz');
        }
        if (array[index] % 3 !== 0 && array[index] % 5 === 0){
            result.push('buzz');
        }
        if (array[index] % 3 !== 0 && array[index] % 5 !== 0){
            result.push('bug');
        }
    }
    console.log(result);// seu código aqui
}

// Desafio 9
function encode() {
  let output = [];
    let encodeString = [];
    for (let index = 0; index < arraystring.length; ){
        if (arraystring[index] === 'a'){
            encodeString.push('1');
            index += 1;
        }
        if (arraystring[index] === 'e'){
            encodeString.push('2');
            index += 1;
            
        }
        if (arraystring[index] === 'i'){
            encodeString.push('3');
            index += 1;
        }
        if (arraystring[index] === 'o'){
            encodeString.push('4');
            index += 1;
        }
        if (arraystring[index] === 'u'){
            encodeString.push('5');
            index += 1;
        }
        else {
            encodeString.push(arraystring[index]);
            index += 1;
        }
    }
    encodeString.pop();
    for(index = 0; index < encodeString.length; index += 1){
        output = output + encodeString[index];
    }
    console.log(output)// seu código aqui
}
function decode() {
  let output = [];
    let decodeString = [];
    for (let index = 0; index < arraystring.length + 1; ){
        if (arraystring[index] === '1'){
            decodeString.push('a');
            index += 1;
        }
        if (arraystring[index] === '2'){
            decodeString.push('e');
            index += 1;
        }
        if (arraystring[index] === '3'){
            decodeString.push('i');
            index += 1;
        }
        if (arraystring[index] === '4'){
            decodeString.push('o');
            index += 1;
        }
        if (arraystring[index] === '5'){
            decodeString.push('u');
            index += 1;
        }
        else {
            decodeString.push(arraystring[index]);
            index += 1;
        }
    }
    decodeString.pop();
    for(index = 0; index < decodeString.length; index += 1){
        output = output + decodeString[index];
    }
    console.log(output)// seu código aqui
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
