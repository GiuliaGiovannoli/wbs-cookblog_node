import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';

import './comp-styles.css';

const useStyles = makeStyles((theme) => ({
    root: {
maxWidth: 345,
    },
    media: {
height: 0,
paddingTop: '56.25%', 
    },
    expand: {
transform: 'rotate(0deg)',
marginLeft: 'auto',
transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
}),
    },
    expandOpen: {
transform: 'rotate(180deg)',
    },
}));


export default function RecipeCards({ posts, addFavorite }) {

    const classes = useStyles();

    const { category } = useParams()
    const [categoryResult, setCategoryResult]= useState()

    const [favorite, setFavorite]= useState(false)

    function onClickhandle(event) {
        addFavorite && addFavorite(categoryResult && categoryResult.slug);
        setFavorite(true);
    }

    const BACKEND_URL = process.env.REACT_APP_PROD_URL

    useEffect(()=>{
        if(category){
            fetch(`${BACKEND_URL}api/recipes/${category}`)
            .then(res => res.json())
            .then (data => setCategoryResult(data[0]))
        }
    },[category])


    return (
        <>
        { !category ? (
            <Box m={1} p={1} id="collection">
        {posts && posts.map((post) => {
            return (
                post.id < 7 ? 
                (<Box p={1} id="card">
            <Card className={classes.root} id="recipe">
            <CardHeader id="recipeTitle"
        title={post.title} />
        <CardMedia className={classes.media} image={`${BACKEND_URL}${post.slug}.png`} title=""/>
        <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" id="recipeText">
        <p>By Chef {post.author}</p>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" id="recipeText">
        <p>{post.category}</p>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" id="recipeText">
        <div className="slug">
        <Link className="link" to={`/allrecipes/all/${post.slug}`}>
        Show more
        </Link>
        </div>
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <FavoriteIcon onClick={()=>addFavorite && addFavorite(post.slug)} className={post.favorite? "heart": ""} />
        </IconButton>
        </CardActions>
    </Card>
            </Box> )
            : ( null )
            )})}
            </Box>
        )
        : (
            <Box m={1} p={1} id="collection">
        <Box p={1} id="card">
            <Card className={classes.root} id="recipe">
            <CardHeader id="recipeTitle"
        title={categoryResult && categoryResult.title} />
    <CardMedia className={classes.media} image={`${BACKEND_URL}${categoryResult && categoryResult.slug}.png`} title=""/>
        <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" id="recipeText">
        <p>By Chef {categoryResult && categoryResult.author}</p>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" id="recipeText">
        <p>{categoryResult && categoryResult.category}</p>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" id="recipeText">
        <div className="slug">
        <Link className="link" to={`/allrecipes/all/${categoryResult && categoryResult.slug}`}>
        Show more
        </Link>
        </div>
        </Typography>
        <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <FavoriteIcon onClick={onClickhandle} className={favorite ? "heart" : ""} />
        </IconButton>
        </CardActions>
        </CardContent>
    </Card>
            </Box> 
            </Box>
        )
        }

<br></br>
        <Link className="link" id="center" to="/allrecipes/all/all">Show All of The Recipes</Link>
        <br></br>

</>
    )
}