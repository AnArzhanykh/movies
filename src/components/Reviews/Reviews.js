
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
                <ul className="col-6 ">
                    {  results.length ?  results.map(({author, content, id})=>(<li key={id} className="card mb-3">
                        <div className="card-body">
                            <h2 className="card-title">{author}</h2>
                            <p className="card-text">{content}</p>
                         </div>   
                        </li>)):
                    noComment}
                </ul>
            </>
        )
    }
}

export default Reviews;