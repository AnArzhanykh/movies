
import {Component} from 'react';
import Axios from 'axios';
import key from '../../key';


class Cast extends Component {

    state={

    }
    
    async componentDidMount(){
        // const {movieId} =this.props.match.params;
        // const response = await Axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`)
        // console.log(response.data);
        // this.setState({...response.data})
    }

    render(){

        return(
            <>
                <h1>hello</h1>
            </>
        )
    }
}

export default Cast;