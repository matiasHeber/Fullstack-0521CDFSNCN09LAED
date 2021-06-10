function multiplicar(num1, num2) {
    if (num1 == 0 ||  num2 == 0) {
        return 0;
    } 
    
    return num1 * num2;
}

console.log(multiplicar(5,10));

module.exports = multiplicar;