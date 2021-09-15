
import {Component} from 'react';
import {NavLink, Route} from 'react-router-dom';
import Axios from 'axios';
import key from '../key';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';



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
                <button tupe="button" onClick={this.handlGoBack}>Go back</button>
                <div>
                    {poster_path && <img src={imageUrl} alt={title}/>}
                    <h1>{title}</h1>
                    <h2>Overview</h2>
                    <h2> User Score {vote_average*10}%</h2>
                    <p>{overview}</p>
                    <h3>Genres</h3>
                    <ul>
                        { genres.length > 0 && genres.map(({id, name})=>(<li key ={id}>{name}</li>))}
                    </ul>
                    <p>Additional information</p>
                    <ul>
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

export default MovieDetailsPage;