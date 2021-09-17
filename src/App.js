import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomeView from './views/HomeView';
import MoviesView from './views/MoviesView';
import MovieDetailsPage from './views/MovieDetailsPage';
import AppBar from './components/AppBar';
import routers from './helpers/routers.js'

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div  className="container">
      <AppBar/>
      <Switch>
        <Route  path ={`${routers.movies}/:movieId`} component={MovieDetailsPage}></Route>
        <Route  path ={routers.movies} component={MoviesView}></Route>
        <Route  path ={routers.home} component={HomeView}></Route>
      </Switch> 
    </div>
  );
}

export default App;
