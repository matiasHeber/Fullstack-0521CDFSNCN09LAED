const db = require("../../database/models");

const controller = {
    all: (req,res) => {
        db.Character.findAll()
        .then(data => {
            let response = {
                meta: {
                    status: 200,
                    total: data.length,
                    url: 'api/character'
                },
                data: {
                    results: data
                }
            }

            return res.json(response)

        })
        .catch(error => {
            console.log(error);
        })
    }
}

module.exports = controller;