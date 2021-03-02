let nomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
function concatName(nomes) {
    return `${nomes[nomes.length -1]}, ${nomes[0]}`;
}
console.log(concatName(nomes));

/* let arrayString = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
function concatName(primeiro, ultimo) {    
    for (let i = 0; i < arrayString.length; i++) {
        primeiro = arrayString.length - 1;
        ultimo = arrayString[0];
        let novoArray = [primeiro, ultimo];
    }
    return novoArray;
}
console.log(concatName(novoArray[primeiro, ultimo]));



function concatName(string) {
    let arrayString = string[(string.length -1)];
    arrayString += ', ';
    arrayString += string[0];
    return arrayString;
    }
console.log(concatName('Lucas', 'Cassiano', 'Ferraz', 'Paolillo'));


*/