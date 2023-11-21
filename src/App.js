import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Add from './Components/Add';
import Filter from './Components/Filter';
import MovieList from './Components/MovieList'
import NavBar from './Components/NavBar';
import {movies} from './Components/Movies';
import {useState} from 'react';

function App() {
   //console.log(movies);

   const [movieList,setmovieList]=useState (movies)
   console.log(movieList);



  return (
    <div className="App">
      <NavBar/>
      <Filter/>
      <Add/>
      <MovieList movieList={movieList} />
      
    </div>
  );
}

export default App;