
import {Component} from 'react';
import {Link} from 'react-router-dom'
import Axios from 'axios';
import key from '../key';


class MoviesView extends Component {

    state={
        query: '',
        movies: [],
    }


    handlerChanged = (e)=>{
        this.setState({query: e.currentTarget.value});
    }

    sendQuery = async (e)=>{
        e.preventDefault();
        const response = await Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${this.state.query}&page=1&include_adult=false`);
        this.setState({movies:response.data.results})
        this.setState({query: ''})
    }

    render(){
        const {query, movies} = this.state;
        const {location} = this.props;
        const shouldRender = movies.length > 0;
        return(
            <>
                <form className="d-flex col-6">
                    <input  type="text"  value={query} onChange={this.handlerChanged} className="form-control me-2"/>
                    <button type="submit"  onClick={this.sendQuery} className="btn btn-outline-success">Search</button>
                </form>

                <ul className="list-group">
                    {shouldRender  && movies.map(({id, name, original_title})=>(
                        <li key={id} className="list-group-item">
                            <Link to={{pathname:`${this.props.match.url}/${id}`,state:{from: location} }}>{original_title || name}</Link>
                        </li>))}
                </ul>
            </> 
        )
    }
}

export default MoviesView;