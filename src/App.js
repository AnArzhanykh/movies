import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomeView from './views/HomeView';
import MoviesView from './views/MoviesView';
import MovieDetailsPage from './views/MovieDetailsPage';
import AppBar from './components/AppBar';




function App() {
  return (
    <>
      <AppBar />
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
