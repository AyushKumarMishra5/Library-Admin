const express = require('express')
const mongoose = require('mongoose')
const app = express()
const userModel = require('./model/user')
const path = require('path')
require('dotenv');
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'template'));


app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'static', 'landing.html'))
})

app.get('/add', (req, res)=>{
    res.render('add')
})
app.get('/update', (req, res)=>{
    res.render('update')
})
app.get('/read', (req, res)=>{
    res.render('read')
})
app.get('/delete', (req, res)=>{
    res.render('delete')
})

app.post('/libbook', (req, res)=>{
    userModel.create(req.body)
    .then((data)=> res.json(data))
    .catch((err)=> res.json(err))
})

app.post('/libupdate', (req, res) => {
    userModel.findOneAndUpdate(
        { _id: req.body._id },   
        { $set: req.body },          
        { new: true }                
    )
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});


app.post('/libdelete', (req, res) => {
    userModel.findOneAndDelete({ _id: req.body._id })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

app.get('/libdata', (req, res)=>{
    userModel.find()
    .then((data)=> res.json(data))
    .catch((err)=> res.json(err))
})

mongoose.connect('mongodb://localhost:27017/myLibrary')
.then(()=> console.log("Connected to the database!"))
.catch((err)=> console.log("Error connecting to the database!"))

const PORT = process.env.PORT || 4000

app.listen(PORT, (req, res)=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})