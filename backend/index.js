require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()
app.use(cors())
console.log(__dirname)
app.use(express.static(__dirname + '/public'))

const port = process.env.PORT || 4000

const pool = require('./pool/pool') 
const recipeRouter = require('./routes/recipeRouter')
app.use('/api/recipes', recipeRouter)

app.get('/', (req, res) => {
    res.send('Welcome on the Recipe Blog API')
})


app.listen(port, () => {
    console.log(`Server running and listening on port ${port}`)
})