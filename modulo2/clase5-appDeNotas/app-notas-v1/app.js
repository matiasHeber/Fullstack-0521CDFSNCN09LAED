let funcionesDeTareas = require('./funcionesDeTareas');

// Como obtener los argumentos de la terminal
let argumento = process.argv[2];

switch (argumento) {
    case 'listar':
       let tareas = funcionesDeTareas.obtenerTareas();
        for (let i = 0; i < tareas.length; i++) {
           console.log('La tarea ' + tareas[i].titulo+ ' se encuentra ' + tareas[i].estado) ;
        }
        
        // Alternativa con forEach()
        // tareas.forEach(unaTarea => {
        //     console.log(unaTarea.titulo)
        // });
        break;

    case undefined:
        console.log('Tienes que escribir una acción');

    default:
        console.log('No entiendo que quieres hacer');
        break;
}



