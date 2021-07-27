

const productController = {
    all: (req,res)=>{
        res.render('products')
    },

    productDetail: (req, res)=>{
        let productId = req.params.id;
        res.send('Este es el producto de id ' + productId);
    }

}

module.exports = productController;