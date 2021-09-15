
import {Component} from 'react';
import Axios from 'axios';
import key from '../../key';


class Cast extends Component {

    state={
        cast: [],
        defaultImage: 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg',
    }
    
    async componentDidMount(){
        const {movieId} =this.props.match.params;
        const response = await Axios.get(`https://api.themoviedb.org/3/movie/${Number(movieId)}/credits?api_key=${key}&language=en-US`)
        this.setState({cast: response.data.cast})
    }

    render(){
        const {cast, defaultImage} = this.state;
        return(
            <>
                <ul>
                   {cast.map(({id, name,character, profile_path})=>(<li key={id}>
                        <div>
                            <img src={ profile_path=== null ? defaultImage : `https://image.tmdb.org/t/p/w500${profile_path}`} alt={name}/>
                        </div>
                        <div>{name}</div>
                        <div>{character}</div>
                   </li>))}  
                </ul>
            </>
        )
    }
}

export default Cast;