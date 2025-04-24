const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res)=>{
    res.send("Hello the server is ready!")
})

const PORT = process.env.PORT

app.listen(PORT, (req, res)=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})