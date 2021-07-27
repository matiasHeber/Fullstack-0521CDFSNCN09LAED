const productos = ['Televisor', 'Celular', 'Computadora', 'Elefante', 'Playstation'];

const productsController = {
    todos: (req,res) => {
        let datos = {title: 'Productos nuevos',
        listado: productos,
        activa: true,
        many: true,
        quePagina: 'Todos',
        css: 'allProducts'
    }

        res.render('products/productsAll', datos)
    },

    detalle: (req,res) => {
        let datos = {title: 'Productos nuevos',
        listado: productos,
        activa: true,
        many: false
    }

        res.render('products/detail', datos)
    },

    nuevo: (req,res) => {
        res.render('products/new', {title: 'Agregar producto'})
    }


}

module.exports = productsController;