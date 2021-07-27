const path = require('path');

const mainController = {
    
    home: (req,res)=>{
        res.sendFile(path.resolve(__dirname, '../views/home.html'));
    }
    
    // ,

    // login: (req,res)=>{

    // },

    // register: (req,res)=>{

    // },

    // producto: (req,res)=>{
    //     let productId =  req.params.id;
    // }
}

module.exports = mainController;