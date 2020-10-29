import React, {useEffect,useState} from 'react'
import { MovieCard } from '../../components/MovieCard/MovieCard'
import fetchData from '../../lib/fetchData'
import classes from './Movies.module.css'
const Movies = (props) =>{
  let [movies,setMovies] = useState([])
  useEffect(() => {
    fetchData().then(data => {
      if(data.hasOwnProperty('result')) setMovies([...data.result])
    })
  }, [])
  
    let moviesTemplate = movies.map((movie) => {
      return <MovieCard {...movie} key={movie._id}/>
    })
    
    return (
      <div className={classes.movies}>
        {moviesTemplate}
      </div>
    )
  
}

export default Movies
