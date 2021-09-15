import {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import Axios from 'axios';
import key from '../key';



class HomeView extends Component {

    state={
        movies: [],
    }

    async componentDidMount(){
        const response = await Axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`)
        this.setState({movies:response.data.results})
    }

    render(){
        const {movies} = this.state;
        const {location} = this.props;
        const shouldRender = movies.length > 0;
        return(
            <>
                <h1>Trending today</h1>
                <ul>
                    {shouldRender && movies.map(movie=>(<li key={movie.id}> <Link to={{pathname: `/movies/${movie.id}`, state:{from: location}}}>{movie.original_title || movie.name}</Link></li>))}
                </ul>
            </>    
        )
    }
}

export default withRouter(HomeView);