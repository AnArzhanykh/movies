import React from 'react';
import {NavLink} from 'react-router-dom';


const AppBar = ()=>{
    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-light">
                <ul className="nav">
                    <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
                    <li className="nav-item"><NavLink to="/movies" className="nav-link">Movies</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppBar;