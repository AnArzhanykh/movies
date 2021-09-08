import './App.css';
import {Route, Link} from 'react-router-dom'
import HomeView from './views/HomeView'
import MoviesView from './views/MoviesView'

function App() {
  return (
    <>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movies">Movies</Link></li>
      </ul>
      <Route exact path ='/' component={HomeView}></Route>
      <Route exact path ='/movies' component={MoviesView}></Route>
    </>
  );
}

export default App;
