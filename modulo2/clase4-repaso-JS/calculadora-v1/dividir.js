// function dividir(n1,n2) {
//     if(n2 != 0){
//         return n1 / n2;
//     }else{
//         return "No se puede dividir por cero";
//     }
// }

function dividir(n1,n2) {
    if (n1 == 0 && n2 != 0) {
        return 0;
    }else if(n2 == 0){
        return "No se puede dividir por cero";
    }else{
        return n1 / n2;
    }
}



module.exports = dividir;