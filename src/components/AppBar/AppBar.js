import React from 'react';
import {NavLink} from 'react-router-dom';
// import router from 

const AppBar = ()=>{
    return(
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/movies">Movies</NavLink>
            </nav>
        </header>
    )
}

export default AppBar;