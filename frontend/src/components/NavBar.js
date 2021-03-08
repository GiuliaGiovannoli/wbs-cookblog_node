import React, { useEffect, useState } from 'react';
import { NavLink, Link, useParams } from "react-router-dom"

import './comp-styles.css';


export default function NavBar() {

    return(
<nav id="four">
<NavLink exact to="/contact"> <img src=""/> </NavLink>
<NavLink exact to="/" className="link"> Home </NavLink>
<NavLink  exact to="/allrecipes/all"  className="link"> All Recipes </NavLink>
<NavLink exact to="/contact"  className="link"> Contact</NavLink>
</nav>
    )
}
