console.log("hii")
require('dotenv').config()
const express = require('express')

const app = express()

const port = 4000

app.get('/login', (req, res) => {
    res.send("<h1>Hello!! World</h1>")
})

app.get('/twitter', (req, res) => {
    res.send("siddharthjain")
})

app.listen(process.env.PORT, () => {
    console.log('App lisening on port ${port}')
})