import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomeView from './views/HomeView';
import MoviesView from './views/MoviesView';
import MovieDetailsPage from './views/MovieDetailsPage';
import AppBar from './components/AppBar';

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return (
    <div  className="container">
      <AppBar/>
      <Switch>
        <Route exact path ='/' component={HomeView}></Route>
        <Route  path ='/movies/:movieId' component={MovieDetailsPage}></Route>
        <Route  path ='/movies' component={MoviesView}></Route>
        <Route component={HomeView}></Route>
      </Switch> 
    </div>
  );
}

export default App;
