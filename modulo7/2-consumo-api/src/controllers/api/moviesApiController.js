const db = require("../../database/models");

module.exports = {
    create: (req,res) => {
        db.Movie.create(
            {
                title: req.body.title,
                rating: req.body.rating ,
                awards: req.body.awards ,
                length: req.body.length ,
                release_date: req.body.release_date ,
                genre_id: req.body.genre_id 
            }
        )
        .then(confirm => {
            let respuesta; 
            if (confirm) {
                respuesta = {
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/movies/create'
                    },
                    data: confirm
                }
            }else {
                respuesta = {
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'api/movies/create'
                    },
                    data: confirm
                }
            }

            return res.json(respuesta)
        })

    },

    destroy: (req,res) => {
        let idBorrar = req.params.id;

        db.Movie.destroy({
            id: idBorrar,
            force: true // force: true asegura que se ejecute la acción de borrar
        })
        .then(confirm => {
            let respuesta

            if (confirm) {
                respuesta = {
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/movies/delete'
                    },
                    data: confirm
                }
            } else {
                respuesta = {
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'api/movies/delete'
                    },
                    data: confirm
                }
            }

            return res.json(respuesta)
        })
    }
}