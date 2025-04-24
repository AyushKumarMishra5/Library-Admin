const express = require('express')
const mongoose = require('mongoose')
const app = express()
const userModel = require('./model/user')
require('dotenv');
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res)=>{
    res.send("Hello the server is ready!")
})

app.post('/libbook', (req, res)=>{
    userModel.create(req.body)
    .then((data)=> res.json(data))
    .catch((err)=> res.json(err))
})

app.patch('/libbook/:id', (req, res)=>{
    userModel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
    .then((data)=> res.json(data))
    .catch((err)=> res.json(err))
})

app.patch('/libbook/:id', (req, res)=>{
    userModel.findByIdAndDelete(req.params.id, {$set: req.body}, {new: true})
    .then((data)=> res.json(data))
    .catch((err)=> res.json(err))
})

mongoose.connect('mongodb://localhost:27017/myLibrary')
.then(()=> console.log("Connected to the database!"))
.catch((err)=> console.log("Error connecting to the database!"))

app.get('/libdata', (req, res)=>{
    userModel.find()
    .then((data)=> res.json(data))
    .catch((err)=> res.json(err))
})


const PORT = process.env.PORT || 4000

app.listen(PORT, (req, res)=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})