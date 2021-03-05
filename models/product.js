const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['fruit','vegetable','dairy']
    }
})

const Product = mongoose.model('Product', productSchema); //conmpile our model now

//export products from this file to another one
module.exports = Product;