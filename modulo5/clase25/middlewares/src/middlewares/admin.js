let admins = ['Ada', 'Greta', 'Vim', 'Tim'];

function admin(req, res, next){
    let user = req.query.user;
    if(user){
        admins.forEach(function(admin){
            if(user == admin){
                next();
            }
        });
    }else {
        res.send('No tienes los privilegios para ingresar');
    };
};

module.exports = admin;
