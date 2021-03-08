import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom"

import './comp-styles.css';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
});



export default function Home({ posts }) {

    const classes = useStyles();

    const [randomNum, setRandomNum]= useState(0)
    
    useEffect(()=> setRandomNum(Math.floor(Math.random() * (posts.length))),[])

    return(
        <div>
            <div className="home">
        <div className="container">
        <h2>Welcome to Artist Cucina</h2>
        <h3>Do you love colors? Do you love eating?</h3>
        <p> <strong> PERFECT! -Stroll around our website and find the perfect color palette for your plate! You can also choose different options depending on your diet restrictions. </strong> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </div>

    <div className="container" id="categories">
        <h2>Our Categories</h2>
        <div className="categories">
        <Link to="/allrecipes/low_sugar" className="link">Low Sugar</Link>
        <Link to="/allrecipes/gluten_free" className="link">Gluten Free</Link>
        <Link to="/allrecipes/vegan" className="link">Vegan</Link>
        <Link to="/allrecipes/lacto_free" className="link">Lacto Free</Link>
        <Link to="/allrecipes/pescatarian" className="link">Pescatarian </Link>
        <Link to="/allrecipes/vegetarian" className="link">Vegetarian</Link>
        </div>
    </div>

    <div className="container">
        <h2>Dish of the Day</h2>
        <div className="day-dish">
                <CardActionArea component="a" href="#">
        <Card className={classes.card}>
        <div className={classes.cardDetails}>
            <CardContent>
            <Typography component="h2" variant="h5">
                {posts[randomNum].title}
                </Typography>
                <Typography variant="subtitle1" id="recipeText">
                <br></br>
                By Chef {posts[randomNum].author}
                <br></br>
                {posts[randomNum].category}
                </Typography>
                <Typography variant="subtitle1" id="recipeText">
                <br></br>
                Ingredients:
                <br></br>
                {posts[randomNum].ingredients}
                </Typography>
                <Typography variant="subtitle1" id="recipeText">
                <br></br>
                Method: 
                <br></br>
                {posts[randomNum].description}
                </Typography>
                
            </CardContent>
            </div>
            <CardMedia className={classes.cardMedia} image={`http://localhost:4000/${posts[randomNum].slug}.png`} title="" id="pic"/>
        </Card>
        </CardActionArea>
        </div>
        </div>
        
    </div>
    </div>
    )
}