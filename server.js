const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const path = require('path')

const router = require('./server/routes/Routes')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use('/', router)

const { PORT } = process.env
app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`)
})