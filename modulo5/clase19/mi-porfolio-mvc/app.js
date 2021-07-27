const express = require('express');
const app = express();

const path = require('path');

// Le digo al entry point que mis archivos de vista estan en la carpeta VIEWS
app.set('views', path.join(__dirname, 'views'));

// Seteo el motor de vistas a EJS
app.set('view engine', 'ejs');

app.use(express.static('public'));

// Requiero mi archivo de rutas
const mainRouter = require('./routers/main');
const productsRouter = require('./routers/products');

// Utilizo mi archivo main con el prefijo "/"
app.use('/', mainRouter);

app.use('/products', productsRouter)


app.listen(3000, ()=> {
    console.log('Servidor corriendo en puerto 3000');
})