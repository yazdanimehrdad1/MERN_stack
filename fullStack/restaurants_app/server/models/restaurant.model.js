const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema(
        {
            name:{
                type:String,
                required: [true, "Restaurant Name is Required"],
                minlength: [ 2, "Retaurant name must be atleast 2 characters"],
                unique: true
            },

            cuisine:{
                type:String,
                required:[true, "Restaurant cuisine is required"],
                enum:["Mexican", "Pizza", "Burgers"]
            },
            hasDelivery:{
                type:Boolean,
                required:true
            },
            dishImg:{
                type:String
            }

        }, {timestamps:true}
    );

const Restaurant = mongoose.model("Restaurant", RestaurantSchema)

module.exports = Restaurant;