let fs = require('fs');

let funcionesDeTareas = {
    obtenerTareas: function (params) {
        let tareasJSON = fs.readFileSync('tareas.json', 'utf-8');
        let tareas = JSON.parse(tareasJSON);
        return tareas;
    }
}

module.exports = funcionesDeTareas;