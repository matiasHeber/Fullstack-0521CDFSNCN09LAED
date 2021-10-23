const { Sequelize } = require('../database/models');
const db = require('../database/models');
const Op = Sequelize.Op;

const characterController = {
    all: async (req,res) => {
        //Obtener todos los personajes
        let characters = await db.Character.findAll();
        res.send(characters);

        // db.Character.findAll()
        // .then(characters => res.send(characters))
    },

    getOne: async (req,res) => {
        let oneCharacter = await db.Character.findByPk(req.params.id);

        res.send(oneCharacter);
    },

    getByName: async (req,res) => {
        let result = await db.Character.findAll({
            where: {
                name: {
                    [Op.like]: `%${req.params.name}%`
                }
            }
        })

        res.send(result);
    },

    create: async (req,res) => {
        let character = await db.Character.create({
            name: 'Carlitos',
            status: 'Tevez',
            species: 'Alien',
            image: 'blabla'
        });

        // let episode = await db.Episode.create({
        //     name: 'ALgo',
        //     numero: 2,
        //     season: 4,
        //     character_id: character.id
        // });

        res.redirect('/characters');
    },

    update: async (req,res)=>{
        let result = db.Character.update(
            {
                name: 'Carlos' // Cambiar por datos y req.body
            },
            {
                where: {id:47} // Cambiar por req.params
            }
        );

        res.redirect('/characters');
    },


    delete: async (req,res)=>{
        let result = await db.Character.destroy({
            where: {id: 46}
        })

        res.redirect('/characters')
    }
};

module.exports = characterController;