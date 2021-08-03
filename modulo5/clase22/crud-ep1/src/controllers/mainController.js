const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

products.forEach(element => {
	element.price = toThousand(element.price);
	return
});

console.log(products);

const controller = {
	index: (req, res) => {
		// Do the magic
		let visitados = products.filter(element => element.category === 'visited');
		let descuento = products.filter(element => element.category === 'in-sale');
		res.render('index', { visitados: visitados, descuento: descuento });
	},
	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;
