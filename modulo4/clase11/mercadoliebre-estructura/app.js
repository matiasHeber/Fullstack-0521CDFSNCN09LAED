const express = require('express');
const app = express();

app.use('/static', express.static(__dirname + '/public'));

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});