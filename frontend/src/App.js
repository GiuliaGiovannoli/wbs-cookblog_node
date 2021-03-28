import React, { useState, useEffect, useCallback } from 'react'
import { Switch, Route, NavLink, Link } from "react-router-dom"

import Spinner from './components/Spinner'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Favorites from './components/Favorites'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Uploads from './components/Uploads'
import RecipeCards from './components/RecipeCards'
import RecipePage from './components/RecipePage'
import './App.css';

/* let BACKEND_URL
if (process.env.NODE_ENV === 'production') {
  BACKEND_URL = process.env.REACT_APP_PROD_URL // 'https://myapponheroku.herokuapp.com'
} else {
  BACKEND_URL = process.env.REACT_APP_DEV_URL // 'http://localhost:4000'
} */


function App() {

  const [posts, setPosts] = useState();
  // const [slug, setSlug] = useState();
  const [categoryResult, setCategoryResult]= useState()

  const addFavorite =(slug)=>{
    const newObjArr= posts.map((prevPost) => {
          if (prevPost.slug===slug){
            return { ...prevPost,
              favorite: !prevPost.favorite
            } 
          } else return prevPost })
    setPosts(newObjArr)
}

    // Everytime you are calling your backend, replace localhost:4000
  
    useEffect(() => {
      fetch('http://localhost:4000/api/recipes')
      .then(res => res.json())
      .then(data => setPosts(data.map((post)=>({ ...post, favorite: false}))))
      .catch(e => console.log(e.message))
    }, [])


  return (
    <div>
    
    <NavBar />
    <Header />

    <Switch>
      <Route exact path="/contact" component={Contact} />

      <Route exact path="/allrecipes/all/:slug" render={(props) => posts && <RecipePage {...props} posts={posts}  />} />
      <Route exact path="/allrecipes/all" render={(props) => posts && <RecipeCards {...props} posts={posts} addFavorite={addFavorite} />} />
      <Route exact path="/allrecipes/Favorites" render={(props) => (posts && posts.filter(post=>post.favorite).length >=1 ?  <RecipeCards {...props} posts={posts.filter(post=>post.favorite)} addFavorite={addFavorite}/> 
      : <h2 className="container">Please choose some favorites first</h2>)} />
      <Route path="/allrecipes/:category" render={(props)=> (posts ?  posts && <RecipeCards {...props} posts={posts} addFavorite={addFavorite} /> : <Spinner />)}/>
      <Route exact path="/uploadsection" render={(props) => (posts && <Uploads {...props} posts={posts} />)} />
      <Route exact path="/" render={(props) => posts && <Home {...props} posts={posts} addFavorite={addFavorite} />} />
    </Switch>

    <Favorites />
    <br></br>
    <Footer />
    </div>
  );
}

export default App;
