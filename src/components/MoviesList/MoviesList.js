import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import routers from '../../helpers/routers.js'

const MoviesList = ({movies, location, })=>{

    return(
            <ul className="list-group">
                {movies.map(({id, name, original_title})=>(
                    <li key={id} className="list-group-item">
                        <Link to={{pathname:`${routers.movies}/${id}`,state:{from: location} }}>{original_title || name}</Link>
                    </li>))}
            </ul>
            )
}

export default  withRouter(MoviesList);

// дефаулт , прототайпс , проверка сервера,