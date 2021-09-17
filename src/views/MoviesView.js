
import {Component} from 'react';
import Axios from 'axios';
import key from '../key';
import MoviesList from '../components/MoviesList'


class MoviesView extends Component {

    state={
        query: '',
        movies: [],
        movieNotFind: false,
    }


    handlerChanged = (e)=>{
        this.setState({query: e.currentTarget.value});
    }

    sendQuery = async (e)=>{
        e.preventDefault();
        if(!this.state.query){
            return
        }
        const response = await Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${this.state.query}&page=1&include_adult=false`);
        this.setState({movies:response.data.results})
        this.setState({query: '', movieNotFind: true})
    }


    render(){
        const {query, movies, movieNotFind, emptyString} = this.state;
        const {location} = this.props;
        const shouldRender = movies.length > 0;
        return(
            <>
                <form className="d-flex col-6">
                    <input  type="text"  value={query} onChange={this.handlerChanged} className="form-control me-2"/>
                    <button type="submit"  onClick={this.sendQuery} className="btn btn-outline-success">Search</button>
                    
                </form>
                {movieNotFind && !shouldRender &&  <h2> По вашему запросу нечего не найдено</h2>}
                {shouldRender  && <MoviesList movies={movies} location={location} /> }
            </> 
        )
    }
}

export default MoviesView;