var nombre; // Declaro la varialbe asignando un nombre
let edad;  // Esto es una variable "undefined" (sin definir)
const email = 'mail@mati.com';


// Asigno un valor a una variable
nombre = "mati";
edad = 25;

// booleano
let esMayor = true; 
let esMenor60 = false;

let unArray = ["nombre", "nombre2", 2, true];

let auto1 = {
    marca: 'VolksWagen',
    modelo: 'Golf',
    anio: '2017',
    color: 'negro'
};

let name = "Pepito";
let lastName = "Sanchez";
//Concatenacion
// console.log(name + " " + lastName);

// Condicionales

let datos = {
    age: 19,
    acompaniado: true
}

if(datos.age >= 18){
    console.log('Podes ingresar');
} else if(datos.acompaniado == true){
    console.log('Puede pasar acompañado por un mayor');
} else{
    console.log('No tiene permitio ingresar');
}

function saludar() {
    console.log('Hola');
}

function saludarConNombre(unNombre) {
    console.log('Hola ' + unNombre);


    return 'Hola ' + unNombre;
}

saludarConNombre('Florencia');