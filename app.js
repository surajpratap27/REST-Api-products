require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./db/connection')
const products_routes = require('./routes/products')

const PORT = process.env.PORT || 5500;

app.use('/api/products/', products_routes)

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`Connection is live on port no.${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start();