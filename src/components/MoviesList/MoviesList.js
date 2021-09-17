import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import routers from '../../helpers/routers.js';
import PropTypes from 'prop-types';

const MoviesList = ({movies, location})=>{
    return(
            <ul className="list-group">
                {movies.map(({id, name, original_title})=>(
                    <li key={id} className="list-group-item">
                        <Link to={{pathname:`${routers.movies}/${id}`,state:{from: location} }}>{original_title || name}</Link>
                    </li>))}
            </ul>
            )
}

MoviesList.propTypes  = {
    movies: PropTypes.shape({
        id:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        original_title:PropTypes.string.isRequired,
    }),
    location: PropTypes.shape({
        hash: PropTypes.string.isRequired,
        pathname: PropTypes.string,
        search: PropTypes.string,
  }),   
}

export default  withRouter(MoviesList);

// дефаулт , прототайпс , проверка сервера,