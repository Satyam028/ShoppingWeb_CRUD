const mongoose = require("mongoose");
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("MONGO CONNECTION OPEN!!");
})
.catch(err => {
    console.log("MONGO ERROR!!!");
    console.log(err)
})

// const p = new Product({
//     name : "Ruby",
//     price: 1.55,
//     category : 'fruit'
// })

// p.save()
// .then(p => {
//     console.log(p);
// })
// .catch(p => {
//     console.log(err);
// })

const seedProducts = [ 
    {
        name : "Ruby",
        price: 1.55,
        category : 'fruit'
    },
    {
        name : "EggPlant",
        price: 45,
        category : 'vegetable'
    },
    {
        name : "Watermelon",
        price: 55,
        category : 'fruit'
    },
    {
        name : "Tomato",
        price: 20,
        category : 'vegetable'
    },
    {
        name : "Milk",
        price: 50,
        category : 'dairy'
    }
]

Product.insertMany(seedProducts)
.then(res => {
    console.log(res)
})
.catch(e => {
    console.log(e)
})