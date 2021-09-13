import './App.css';
import {Route, NavLink, Switch} from 'react-router-dom';
import HomeView from './views/HomeView';
import MoviesView from './views/MoviesView';
import MovieDetailsPage from './views/MovieDetailsPage';




function App() {
  return (
    <>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/movies">Movies</NavLink></li>
      </ul>
      <Switch>
        <Route exact path ='/' component={HomeView}></Route>
        <Route  path ='/movies/:movieId' component={MovieDetailsPage}></Route>
        <Route  path ='/movies' component={MoviesView}></Route>
        <Route component={HomeView}></Route>
      </Switch> 
    </>
  );
}

export default App;
