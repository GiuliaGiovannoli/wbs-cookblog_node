require('dotenv').config()
const express = require('express')
const app = express()

const pool = require('../pool/pool') 
const recipeRouter = express.Router()


// select * from users where lower(first_name) like '%al%';
recipeRouter.get('/:category', (req, res) => {
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
recipeRouter.get('/slug/:slug', (req, res)=>{
    const {slug} = req.params;
    pool.query('SELECT * FROM Recipes WHERE slug=$1 ORDER BY slug', [slug])
    .then((data)=> res.json(data.rows))
    .catch((err)=> res.sendStatus(500))
})


recipeRouter.get('/', (req,res) => {
    pool.query("SELECT * FROM Recipes")
    .then((data) => res.json(data.rows))
    .catch((err) => res.sendStatus(500))
})


module.exports = recipeRouter
