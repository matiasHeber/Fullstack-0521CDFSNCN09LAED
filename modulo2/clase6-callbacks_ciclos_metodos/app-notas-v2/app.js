let funcionesDeTareas = require('./tareas');

// Como obtener los argumentos de la terminal
let argumento = process.argv[2];


switch (argumento) {
    case 'listar':
       let tareas = funcionesDeTareas.leerJSON(); //Me devuelve una collecion (array) con todas las tareas

        // Punto 1 modificar el listar
        // Cambiar for por forEach
        tareas.forEach((tarea, indice) => {
           console.log(indice+1 + '. La tarea ' + tarea.titulo+ ' se encuentra ' + tarea.estado) ;
        });
              
        break;

    case undefined:
        console.log('Tienes que escribir una acción');
        break;

    // Escribir el caso en que se utilice "crear"
        // Dentro del caso crear tenemos que armar un objeto literal con las propiedades "titulo" y "estado" donde titulo será lo que se escribe en la terminal y el estado será SIEMPRE "pendiente"
        // Una vez que tengo el objeto literal de la nueva tarea, utilizo la funcion correspondiente del archivo tareas.js para guardarla

    case 'crear':
        let nuevaTarea = {
            titulo: process.argv[3], // La posicion 3 es donde tengo el titulo de la tarea
            estado: "pendiente"
        };
        funcionesDeTareas.guardarTarea(nuevaTarea);
        break;

    // Escribir el caso en que se utilice "filtrar"
        // Recuperar cual es el estado que se necesita filtrar usando "process.argv[]"
        // Utilizar el metodo correspondiente para filtrar una tarea por estado
        // Una vez filtradas, recorrer la nueva colección y mostrar por consola las tareas

    case 'filtrar':
        let estadoDeBusqueda = process.argv[3];
        let tareasFiltradas = funcionesDeTareas.leerPorEstado(estadoDeBusqueda);
        console.log('--------- Tareas filtradas por estado '+estadoDeBusqueda+' ---------');
        tareasFiltradas.forEach((unaTarea, indice) => {
            console.log(indice+1 +' '+ unaTarea.titulo);
        })
        break;

    default:
        console.log('No entiendo que quieres hacer');
        break;
}




