const db = require('../database/models');
const sequelize = db.sequelize;

//Otra forma de llamar a los modelos
const Movies = db.Movie;

const moviesController = {
    'list': (req, res) => {
        db.Movie.findAll()
            .then(movies => {
                res.render('moviesList.ejs', {movies})
            })
    },
    'detail': (req, res) => {
        db.Movie.findByPk(req.params.id, {
            include: ['genres', 'actors']
        })
            .then(data => {
               res.render('moviesDetail.ejs', {movie: data});
            })
    },
    'new': (req, res) => {
        db.Movie.findAll({
            order : [
                ['release_date', 'DESC']
            ],
            limit: 5
        })
            .then(movies => {
                res.render('newestMovies', {movies});
            });
    },
    'recomended': (req, res) => {
        db.Movie.findAll({
            where: {
                rating: {[db.Sequelize.Op.gte] : 8}
            },
            order: [
                ['rating', 'DESC']
            ]
        })
            .then(movies => {
                res.render('recommendedMovies.ejs', {movies});
            });
    }, //Aqui debemos modificar y completar lo necesario para trabajar con el CRUD
    add: function (req, res) {
        // TODO  
         res.render('moviesAdd');
    },
    create: function (req, res) {
        // TODO
        db.Movie.create({
            title: req.body.title,
            rating: req.body.rating,
            length: req.body.length,
            awards: req.body.awards,
            release_date: req.body.release_date,
        })

        .then(()=>{
            res.redirect('/movies')
        })

        // Si corresponde el name del input con la columna puedo usar el req.body solo
        // db.Movie.create(req.body)
    },
    edit: function(req, res) {
        // TODO
        let id = req.params.id;
        let laPeliQueEncontre = db.Movie.findByPk(id);
        let genres = db.Genre.findAll();

        Promise.all([laPeliQueEncontre, genres]) 
        .then(([Movie, genres]) => {
            res.render('moviesEdit', {Movie, genres})
        })
    },
    update: function (req,res) {
        // TODO
        db.Movie.update(
            req.body,
            {
                where: {id: req.params.id}
            })
        .then(()=>{
            res.redirect('/movies/detail/' + req.params.id)
        })
    },
    // delete: function (req, res) {
    //     // TODO
    // },
    destroy: function (req, res) {
        // TODO
        db.Movie.destroy({
            where: {id: req.params.id}
        })
        .then(()=>{
            res.redirect('/movies/')
        })
    }

}

module.exports = moviesController;