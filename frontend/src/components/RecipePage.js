import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom"

import './comp-styles.css';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

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

    const BACKEND_URL = process.env.REACT_APP_PROD_URL

useEffect(()=>{
    if(slug){
        fetch(`${BACKEND_URL}api/recipes/slug/${slug}`)
        .then(res => res.json())
        .then (data => setSlugResult(data[0]))
        .catch(e => console.log(e.message))
        }
    },[slug])


return (
    <>
    <div id="recipeGrid">
    { slug != 'all' ? (
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
            <CardMedia className={classes.cardMedia} image={`${BACKEND_URL}${slugResult && slugResult.slug}.png`} title="" id="pic"/>
        </Card>
        </CardActionArea>
    ) :
        (posts && 
            posts.map((post) => {
                return(
            post.id < 7 ? 
                    ( <CardActionArea component="a" href="#">
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
            <CardMedia className={classes.cardMedia} image={`${BACKEND_URL}${post.slug}.png`} title="" id="pic"/>
        </Card>
        </CardActionArea>)
        : (
            post.pic ? 
            (
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
            <CardMedia className={classes.cardMedia} image={post.pic ? post.pic : coco} title="" id="pic"/>
        </Card>
        </CardActionArea>) : ( null )
        ))
            }
        ) )
}
</div>
</>
)
}