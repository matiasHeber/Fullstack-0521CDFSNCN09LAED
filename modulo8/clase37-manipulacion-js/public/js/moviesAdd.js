// Crear un archivo JavaScript: /public/js//moviesAdd.js, y vincularlo con el archivo;
// /views//moviesAdd.ejs.
// ● Desde el archivo /public/js/moviesAdd.js, capturar los siguientes elementos: <h1>,
// <section> y <article>, ubicados en el archivo: /views//moviesAdd.ejs.
// ● Agregar a la etiqueta <h1> el mensaje: “AGREGAR PELÍCULAS”.
// ● Agregar a la etiqueta <h1> la clase: “titulo”.
// ● Agregar al artículo la clase: “fondoTransparente”.
// ● Agregar a la sección la clase: “fondoCRUD”.


//OPCION CON .onload
// window.onload(()=>{
    
//OPCION CON .addEventListenter
window.addEventListener('load', ()=>{
    
    const h1 = document.querySelector('h1');
    const section = document.getElementById('formulario');
    const article = document.querySelector('article');
    
    h1.innerText += "AGREGAR PELICULAS";
    h1.classList.add('titulo');
    article.classList.add('fondoTransparente');
    section.classList.add('fondoCRUD');




})