module.exports = {
    index: function(req, res){
        res.render('index');
    },
    admin: function(req, res){
        res.send('Hola Admin: ' + req.query.user);
    }
};