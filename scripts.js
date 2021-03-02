function compareTrue(bool1, bool2) {
    if (bool1 === true && bool2 === true) {
        return true
    }
    else {
        return false
    }
}
console.log(compareTrue(false, true));

function calcArea(base, height) {
    let area = (base * height) / 2;
    return area
}
console.log(calcArea(10, 50));