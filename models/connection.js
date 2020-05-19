const mongoose = require('mongoose');

const connection = process.env.MONGOD_URL || "mongodb://localhost/bog-app-one";

mongoose.connect(connection)
    .then(() => {
        console.log("Connected to Mongoose Successfully")
    })
    .catch((err) => {
        console.log(" Failed to connect to Mongoose")
    })

module.exports = mongoose