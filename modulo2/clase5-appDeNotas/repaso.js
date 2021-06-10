// Constructor de objetos

function Auto(marca,modelo,color) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.describirse = function () {
        return 'El auto es de marca ' + this.marca + ' de modelo ' + this.modelo + ' y su color es ' + this.color
    }
}




