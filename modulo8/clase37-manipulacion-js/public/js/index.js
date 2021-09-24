
// ● A todos los párrafos que fueron capturados, asignar a los pares la clase:
// “descatadoPar”. Y a los impares agregar la clase: “destacadoImpar”.
// ● Finalmente, establecer como visible a la etiqueta <main> en el browser o
// navegador, aplicando el estilo: display : block.

const main = document.querySelector('main');
const h2 = document.querySelector('h2');
const a = document.querySelector('a');
const parrafos = document.querySelectorAll('p'); // [p,p,p,p,p,p,p,p,p,p]

const nombre = prompt('Por favor ingresa tu nombre');

if(nombre){
    h2.innerText += nombre;
}else{
    h2.innerText += 'Invitado';
}

h2.style.textTransform = "upperCase";

a.style.color = "#E51B3E";

const cambiarFondo = confirm('¿Desea cambiar el fondo de pantalla?');

if(cambiarFondo){
   document.querySelector('body').classList.add('fondo');
}

for (let i = 0; i < parrafos.length; i++) {
    if (i % 2 === 0) {
        parrafos[i].classList.add('destacadoPar');
    } else {
        parrafos[i].classList.add('destacadoImpar');
    }
}

main.style.display = 'block';