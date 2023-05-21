require('dotenv').config();
const connectDB = require('./db/connection')
const Product = require('./models/product')
const ProductJson = require('./products.json')

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL)
        await Product.deleteMany();
        await Product.create(ProductJson);
        console.log("success json uploaded")
    } catch (error) {
        console.log(error)
    }
}

start();