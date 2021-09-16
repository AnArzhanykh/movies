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
                <h1 className="home--title p-3" >Trending today</h1>
                <ul className="list-group">
                    {shouldRender && movies.map(({id, original_title,name })=>(
                        <li key={id} className="list-group-item">
                            <Link to={{pathname: `/movies/${id}`, state:{from: location}}}>{original_title || name}</Link>
                        </li>))}
                </ul>
            </>    
        )
    }
}

export default withRouter(HomeView);