
import {Component} from 'react';
import Axios from 'axios';
import key from '../../key';


class Reviews extends Component {

    state={
        results: [],
        noComment: "We don't have any reviews for this movie",
    }
    
    async componentDidMount(){
        const {movieId} =this.props.match.params;
        const response = await Axios.get(`https://api.themoviedb.org/3/movie/${Number(movieId)}/reviews?api_key=${key}&language=en-US&page=1`)
        this.setState({results: response.data.results});
    }

    render(){
        const {results, noComment } = this.state;
        return(
            <>
                <ul>
                    {  results.length ?  results.map(({author, content, id})=>(<li key={id}><h2>{author}</h2><p>{content}</p></li>)): noComment}
                </ul>
            </>
        )
    }
}

export default Reviews;