const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/shopApp')
.then(()=> {
    console.log("CONNECTION OPEN!!!")
} )
.catch((e)=>{
    console.log("Oh noooo")
    console.log(e)
})


const productSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        maxlength:20
    },

    price:{
        type:Number,
        required: true
    },

    categories:[String],
    qty:{
        online:{
            type:Number,
            default:0
        },
        inStore:{
            type:Number,
            default:0
        }
    }
    

})

const Product = mongoose.model('Product', productSchema)


const bike = new Product({name: "Mountain Bike", price:599, categories:['test1', 'test2'] })
bike.save()
.then( data =>{
    console.log("IT WORKED")
    console.log(data)
})
.catch( err=> {
    console.log("OH NO ERROR!")
    console.log(err)
})