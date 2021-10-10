const RestaurantController = require('../controllers/restaurant.controller')
module.exports = function(app){
    app.get('/api', RestaurantController.index),
    app.post('/api/restaurant', RestaurantController.createRestaurant),
    app.get('/api/restaurant', RestaurantController.getAllRestaurant),
    app.get('/api/restaurant/:id', RestaurantController.getOneRestaurant),
    app.put('/api/restaurant/:id', RestaurantController.updateController),
    app.delete('/api/restaurant/:id', RestaurantController.deleteRestaurant)
}