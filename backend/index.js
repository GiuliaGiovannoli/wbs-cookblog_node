require('dotenv').config()
const cors = require('cors')
console.log(__dirname)
const express = require('express')
const app = express()
app.use(cors())
app.use(express.static(__dirname + '/public'))
const { Pool } = require('pg')


const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST, 
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
})

//pictures
app.post('/recipes/pictures', (req, res) => {
    const pictures = {
        text: `INSERT INTO Recipes (picture) VALUES ($1) RETURNING *`,
        values: []
    }
    pool.query(pictures).then((data) => res.json(data))
    .catch((err)=> res.sendStatus(500))
})

// select * from users where lower(first_name) like '%al%';
app.get('/recipes/:category', (req, res) => {
    const { category } = req.params

    const findByCategory = {
        text: "SELECT * FROM Recipes WHERE lower(category) LIKE $1",
        values: [`%${category.toLowerCase()}%`]
    }

    pool.query(findByCategory)
    .then(data => res.status(201).json(data.rows))
    .catch(e => res.status(500).send(e.message))
})

//recipes/slug/:slug
app.get('/recipes/slug/:slug', (req, res)=>{
    const {slug} = req.params;
    pool.query('SELECT * FROM Recipes WHERE slug=$1 ORDER BY slug', [slug])
    .then((data)=> res.json(data.rows))
    .catch((err)=> res.sendStatus(500))
})


app.get('/recipes', (req,res) => {
    pool.query("SELECT * FROM Recipes")
    .then((data) => res.json(data.rows))
    .catch((err) => res.sendStatus(500))
})

app.get('/', (req, res) => {
    res.send('HI')
})

app.listen(4000, () => {
    console.log('hi')
})