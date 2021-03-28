require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()
app.use(cors())

const upload = require('./utils/multer')
const path = require('path');
const port = process.env.PORT || 4000
const pool = require('./pool/pool') 
const recipeRouter = require('./routes/recipeRouter')
app.use('/api/recipes', recipeRouter)


app.get('/', (req, res) => {
    res.send('Welcome on the Recipe Blog API')
})

app.use(express.static(path.join(__dirname, '/public')));


app.listen(port, () => {
    console.log(`Server running and listening on port ${port}`)
})