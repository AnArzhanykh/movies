
import {Component} from 'react';
import {Link, Route} from 'react-router-dom';
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
    }
    
    async componentDidMount(){
        const {movieId} =this.props.match.params;
        const response = await Axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`)
        console.log(response.data);
        this.setState({...response.data})
    }

    render(){
        const {title, overview, genres, poster_path,} = this.state
        const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`
        const {match} = this.props;
        return(
            <>
                <button>Go back</button>
                <img scr={imageUrl}/>
                <h1>{title}</h1>
                <h2>Overview</h2>
                <p>{overview}</p>
                <h3>Genres</h3>
                <ul>
                    { genres.length > 0 && genres.map(genre=>(<li key ={genre.id}>{genre.name}</li>))}
                </ul>
                <p>Additional information</p>
                <button> </button>
                <Route path={`${match.path}/:cast`} component={Cast}></Route>
                <Route path={`${match.path}/:reviews`} component={Reviews}></Route>
            </>
        )
    }
}

export default MovieDetailsPage;