const fetch = require('node-fetch');
const db = require('../database/models');

const characterController = {
    all: (req,res) => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
            data.results.forEach(element => {
                db.Character.create({
                    name: element.name,
                    status: element.status,
                    species: element.species,
                    image: element.image
                })
            });
        })
        .catch(error => {
            console.log(error);
        })
    },

    // detail: (req,res)=>{
    //     fetch('https://rickandmortyapi.com/api/character/'+ req.params.id)
    //     .then(response => response.json())
    //     .then(data => {
    //         res.render('unavista', data)
    //     })
        

    // }
}

module.exports = characterController;