const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


products.forEach(element => {
	element.price = toThousand(element.price);
	return
});

const controller = {
	// Root - Show all products
	index: (req, res) => {
		// Do the magic
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
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
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

		res.redirect('/products/detail/'+id);
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;