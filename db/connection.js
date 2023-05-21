const mongoose = require('mongoose');

const connectDB = async (uri) => {
    console.log("connected Database");
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = connectDB;