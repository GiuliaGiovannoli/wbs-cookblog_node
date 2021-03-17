import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom"

import './comp-styles.css';
import Spinner from './Spinner';

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

import coco from '../public/coco.jpg'

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


export default function RecipePage({posts}) {

    const classes = useStyles();

    const { slug } = useParams()
    const [slugResult, setSlugResult]= useState()

useEffect(()=>{
    if(slug){
        fetch(`http://localhost:4000/api/recipes/slug/${slug}`)
        .then(res => res.json())
        .then (data => setSlugResult(data[0]))
        .catch(e => console.log(e.message))
        }
    },[slug])


return (
    <>
    { slug != 'all' ? (
        <div id="recipeGrid">
                <CardActionArea component="a" href="#">
        <Card className={classes.card} id="recipeCard">
        <div className={classes.cardDetails}>
            <CardContent>
            <Typography component="h2" variant="h5">
                {slugResult && slugResult.title}
                </Typography>
                <Typography variant="subtitle1" id="recipeText">
                <br></br>
                By Chef {slugResult && slugResult.author}
                <br></br>
                {slugResult && slugResult.category}
                </Typography>
                <Typography variant="subtitle1" paragraph id="recipeText">
                <br></br>
                Ingredients:
                <br></br>
                {slugResult && slugResult.ingredients}
                </Typography>
                <Typography variant="subtitle1" id="recipeText">
                Method: 
                <br></br>
                {slugResult && slugResult.description}
                </Typography>
                
            </CardContent>
            </div>
            <CardMedia className={classes.cardMedia} image={`http://localhost:4000/${slugResult && slugResult.slug}.png`} title="" id="pic"/>
        </Card>
        </CardActionArea>
        </div>

    ) :
        (posts && 
            posts.map((post) => {
                return(
            post.id < 7 ? 
                    (<div id="recipeGrid">
                <CardActionArea component="a" href="#">
        <Card className={classes.card} id="recipeCard">
        <div className={classes.cardDetails}>
            <CardContent>
            <Typography component="h2" variant="h5">
                {post.title}
                </Typography>
                <Typography variant="subtitle1" id="recipeText">
                <br></br>
                By Chef {post.author}
                <br></br>
                {post.category}
                </Typography>
                <Typography variant="subtitle1" paragraph id="recipeText">
                <br></br>
                Ingredients:
                <br></br>
                {post.ingredients}
                </Typography>
                <Typography variant="subtitle1" id="recipeText">
                Method: 
                <br></br>
                {post.description}
                </Typography>
                
            </CardContent>
            </div>
            <CardMedia className={classes.cardMedia} image={`http://localhost:4000/${post.slug}.png`} title="" id="pic"/>
        </Card>
        </CardActionArea>
        </div>)
        : (
            post.userInput.title.length > 1 ? 
            (<div id="recipeGrid">
                <CardActionArea component="a" href="#">
        <Card className={classes.card} id="recipeCard">
        <div className={classes.cardDetails}>
            <CardContent>
            <Typography component="h2" variant="h5">
                {post.userInput.title}
                </Typography>
                <Typography variant="subtitle1" id="recipeText">
                <br></br>
                By Chef {post.userInput.author}
                </Typography>
                <Typography variant="subtitle1" paragraph id="recipeText">
                <br></br>
                Ingredients:
                <br></br>
                {post.userInput.ingredients}
                </Typography>
                <Typography variant="subtitle1" id="recipeText">
                Method: 
                <br></br>
                {post.userInput.description}
                </Typography>
                
            </CardContent>
            </div>
            <CardMedia className={classes.cardMedia} image={coco} title="" id="pic"/>
        </Card>
        </CardActionArea>
        </div>) : ( null )
        )
                )
            }
        ) )
}
</>
)
}