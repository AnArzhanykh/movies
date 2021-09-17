import {Component} from 'react';
import Axios from 'axios';
import key from '../key';
import MoviesList from '../components/MoviesList';
import PropTypes from 'prop-types';



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
                <h1 className="home--title p-3" >Trending today</h1>
                {shouldRender  && <MoviesList movies={movies} location={location} />}
            </>    
        )
    }
}

HomeView.propTypes  = {
    location: PropTypes.shape({
        hash: PropTypes.string.isRequired,
        pathname: PropTypes.string,
        search: PropTypes.string,
  }),   
}

export default HomeView;