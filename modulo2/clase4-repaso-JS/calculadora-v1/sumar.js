function sumar(num1, num2) {
    let result = num1 + num2;
    return result;
}

// pruebo que todo este como lo espero
console.log(sumar(8, 9));



// Exporto la funcion "sumar" para que este disponible en otros archivos.
module.exports = sumar; 
