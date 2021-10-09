const ProductController  = require('../controlls/product.controller')

module.exports = function(app){
    app.get('/api', ProductController.index),
    app.post('/api/product', ProductController.createProduct)

}
