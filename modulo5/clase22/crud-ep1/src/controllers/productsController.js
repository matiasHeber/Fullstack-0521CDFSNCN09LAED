const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


products.forEach(element => {
	element.price = toThousand(element.price);
	return
});

const controller = {
	// Root - Show all products
	index: (req, res) => {
		// Do the magic
		res.render('products', {products})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		// Do the magic
		let id = req.params.id;
		let unProducto =  products.find(element => element.id == id);
		res.render('detail', {unProducto: unProducto});
	},

	// Create - Form to create
	create: (req, res) => {
		// Do the magic
		res.render('product-create-form');
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
		let nuevoId = products[products.length - 1].id + 1;
		
		let nuevoProducto = {
			name: req.body.name ,
			price: req.body.price ,
			category: req.body.category ,
			discount: req.body.discount ,
			id: nuevoId,
			image: req.file.originalname,
		}

		products.push(nuevoProducto);
		fs.writeFileSync(productsFilePath, JSON.stringify(products));
		res.redirect('/products/detail/' + nuevoId)
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
		let id = req.params.id;
		let productToEdit =  products.find(element => element.id == id);
		res.render('product-edit-form', {productToEdit: productToEdit});
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
		let id = req.params.id;
		products.forEach(element => {
			if(element.id == id){
				element.name = req.body.name;
				element.description = req.body.description;
				element.discount = req.body.discount;
				element.category = req.body.category;
				element.price = req.body.price;
			}
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(products));
		res.redirect('/detail/'+id);
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
		let idAQuitar = req.params.id;
		/* 
		1) recupero todos los productos
		2) filtro o quito de la colección el producto con el id que me llega como parametro
		3) vuelvo a escribir el JSON con los nuevos datos (sin el producto que debia quitar)
		*/
		products = products.filter(elem => elem.id != idAQuitar);
		fs.writeFileSync(productsFilePath, JSON.stringify(products));
		res.redirect('/products');
	}
};

module.exports = controller;