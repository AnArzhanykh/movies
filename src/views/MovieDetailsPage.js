
import {Component} from 'react';
import {NavLink, Route} from 'react-router-dom';
import Axios from 'axios';
import key from '../key';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import PropTypes from 'prop-types';




class MovieDetailsPage extends Component {

    state={
        title: null,
        overview: null,
        genres: [],
        poster_path: null,
        vote_average: null,
    }
    
    async componentDidMount(){
        const {movieId} =this.props.match.params;
        const response = await Axios.get(`https://api.themoviedb.org/3/movie/${Number(movieId)}?api_key=${key}&language=en-US`)
        this.setState({...response.data})
    }

    handlGoBack = ()=>{
        const {location, history} = this.props;
        history.push(location?.state?.from || '/movies')

    }

    render(){
        const {title, overview, genres, poster_path, vote_average} = this.state;
        const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
        const {match} = this.props;
        return(
            <>
                <button tupe="button" onClick={this.handlGoBack} className="btn btn-success">Go back</button>
                <div className="row mt-3 mb-3">
                    <div className="col-3">
                        {poster_path && <img src={imageUrl} alt={title} className="img-fluid"/>}
                    </div>
                    <div className="col-6 p-3">
                        <h3>{title}</h3>
                        <p> User Score {vote_average*10}%</p>
                        <h4>Overview</h4>
                        <p>{overview}</p>
                        <h5>Genres</h5>
                        <ul className="row normolize-li">
                            { genres.length > 0 && genres.map(({id, name})=>(<li key ={id} className="col-3">{name}</li>))}
                        </ul>
                    </div>
                </div>
                <div className="col-6 ">
                    <h2>Additional information</h2>
                    <ul className="">
                        <li><NavLink to={`${match.url}/cast`}>Cast</NavLink></li>
                        <li><NavLink to={`${match.url}/reviews`}>Reviews</NavLink></li>
                    </ul>
                </div>

                <Route path={`${match.path}/cast`} component={Cast}></Route>
                <Route path={`${match.path}/reviews`} component={Reviews}></Route>
            </>
        )
    }
}

MovieDetailsPage.propTypes  = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }),
    location: PropTypes.shape({
        hash: PropTypes.string.isRequired,
        pathname: PropTypes.string,
        search: PropTypes.string,
        state: PropTypes.shape({
            from: PropTypes.shape({
                key: PropTypes.string.isRequired,
                pathname: PropTypes.string.isRequired,
            })
        })
    }),
    match: PropTypes.shape({
        url: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
    }),
}

export default MovieDetailsPage;