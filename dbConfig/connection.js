const mongoose = require("mongoose")

let url = "mongodb://localhost:27017/node-with-mongodb"

const connectDB = () => {
    mongoose.connect(url).then(() => {
        console.log("CONNECTION HAS BEEN ESTABLISHED....")
    }).catch((error) => {
        console.log("ERROR WHILE CONNECTION...", error)
    })
}

module.exports = connectDB