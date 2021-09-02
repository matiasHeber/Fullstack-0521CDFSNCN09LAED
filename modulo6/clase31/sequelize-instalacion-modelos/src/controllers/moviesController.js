const db = require('../database/models');
//const {Pelicula, Genero} = require('../database/models'); // no trae datos innecesarios

const moviesController = {
    list: (req,res)=>{
        db.Pelicula.findAll()
        
        .then( lasPelisQueEncontre =>{
            res.render('moviesList', { pelisAMostrar: lasPelisQueEncontre })
        })
    }
}

module.exports = moviesController;