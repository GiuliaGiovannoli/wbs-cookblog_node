import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom"

import './comp-styles.css';
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

export default function Uploads({posts}) {

    const classes = useStyles();

    const [userInput, setUserInput] = useState({
        title: "",
        ingredients: "",
        description: "",
        author: ""
      });

  const handleInput = (e) => {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [e.target.name]: e.target.value
    }));
  };


    return(
        <div>
<form id="" onSubmit="">
    <div className="container">
      <h1>Create your Recipe </h1>
      <br />
      
        <div className="flex-container">
        <label className="labels" htmlFor="title">Recipe Title: </label>
        <input className="inputs" type="text" placeholder="Recipe title" name="title" value={userInput.title} 
        onChange={handleInput}></input>
        <label className="labels" htmlFor="ingredients">Recipe Ingredients: </label>
      <input className="inputs" type="text" placeholder="Recipe ingredients" name="ingredients" value={userInput.ingredients}
        onChange={handleInput}></input>
        <label className="labels" htmlFor="description">Recipe Description: </label>
        <input className="inputs" type="text" placeholder="Recipe description" name="description" value={userInput.description}
        onChange={handleInput}></input>
        <label className="labels" htmlFor="title">By: </label>
        <input className="inputs" type="text" placeholder="By Author" name="author" value={userInput.author} 
        onChange={handleInput}></input>
        <br />
        <button className="button">
        <label className="labels" htmlFor="fileInput"> Recipe Picture 
        <input id="fileInput" type="file" accept="image/*" hidden onChange=""/>
        </label>
      </button>
            </div>
      </div>
      </form>

      <br />
      <br />

        { userInput.title.length >= 1 || userInput.author.length >= 1 || userInput.description.length >= 1 || userInput.ingredients.length >= 1 ? 
          <div id="recipeGrid upload">
                <CardActionArea component="a" href="#">
        <Card className={classes.card} id="recipeCard">
        <div className={classes.cardDetails}>
            <CardContent>
            <Typography component="h2" variant="h5">
                {userInput.title}
                </Typography>
                <Typography variant="subtitle1" paragraph id="recipeText">
                <br></br>
                Ingredients:
                <br></br>
                {userInput.ingredients}
                </Typography>
                <Typography variant="subtitle1" id="recipeText">
                Method: 
                <br></br>
                {userInput.description}
                </Typography> 
                <Typography variant="subtitle1" id="recipeText">
                <br></br>
                By {userInput.author}
                </Typography>   
            </CardContent>
            </div>
            <CardMedia className={classes.cardMedia} image="" title="" id="pic"/>
        </Card>
        </CardActionArea>
        </div>
        : <h5 className="uploadText">Check here your Recipe before you publish it</h5>
}

{ userInput.title.length >= 1 && userInput.author.length >= 1 && userInput.description.length >= 1 && userInput.ingredients.length >= 1 ?
  (<Link className="link center" to="/allrecipes/all/all" onChange={posts.push({userInput})}>
Publish your Recipe 
</Link>): (<p>Try!</p>)}

</div>

    )
}