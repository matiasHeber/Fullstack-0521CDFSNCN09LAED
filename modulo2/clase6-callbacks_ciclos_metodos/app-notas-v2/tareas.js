let fs = require('fs');

let funcionesDeTareas = {
    leerJSON: function () {
        let tareasJSON = fs.readFileSync('tareas.json', 'utf-8');
        let tareas = JSON.parse(tareasJSON);
        return tareas;
    },

    // Aca va la funcion/metodo de escribirJSON
    escribirJSON: function (tareas) {
        // Convertir el parametro en formato JSON
        let tareasEnJSON = JSON.stringify(tareas);
        // Guardar esto en tareas.json usando "writeFileSync"
        fs.writeFileSync('tareas.json', tareasEnJSON, 'utf-8');
    },

    guardarTarea: function (unaTarea) {
        // Recupero las tareas usando la funcion correspondiente
        let misTareas = this.leerJSON();
        // Agrego la nueva tarea recibida como parametro
        misTareas.push(unaTarea);
        // Escribo el archivo de tareas utilizando la funcion correspondiente
        this.escribirJSON(misTareas);
    },

    leerPorEstado: function (estado) {
        // Recuperar las tareas usando la funcion corespondiente
        // Utilizando el metodo de arrrays "filter" debo filtrar las tareas y retornar las tareas filtradas
        let todasLasTareas = this.leerJSON();
        let tareasFiltradas = todasLasTareas.filter(unaTarea => {
            return unaTarea.estado === estado;
        })
        return tareasFiltradas;
    }
}

module.exports = funcionesDeTareas;