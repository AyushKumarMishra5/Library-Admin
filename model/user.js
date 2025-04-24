const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    bookname: String,
    author: String,
    price: String,
})

module.exports = mongoose.model("library", userSchema)