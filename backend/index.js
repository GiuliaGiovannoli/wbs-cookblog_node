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

/* app.post('/', upload.single('profile_pic'), (req, res) => {
    const {file, fileValidationError} = req
    if (!file) {
    res.status(400).send('Please upload a file') 
    }
    else if (fileValidationError) {
    res.status(400).send(fileValidationError);
    }
    else {
    res.status(200).json({pathToImage: `/uploads/${file.filename}`});}
}) */


app.listen(port, () => {
    console.log(`Server running and listening on port ${port}`)
})