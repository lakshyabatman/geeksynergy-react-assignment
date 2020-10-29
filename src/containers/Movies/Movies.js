import React, {useEffect,useState} from 'react'
import { Redirect } from 'react-router-dom'
import { MovieCard } from '../../components/MovieCard/MovieCard'
import fetchData from '../../lib/fetchData'
import CacheManager from '../../lib/localStorage'
import classes from './Movies.module.css'
const Movies = (props) =>{
  let [movies,setMovies] = useState([])
  useEffect(() => {
    fetchData().then(data => {
      console.log(data)
      if(data.hasOwnProperty('result')) setMovies([...data.result])
    })
  }, [])
  
  if(!CacheManager.isLogged()) return <Redirect to='/login'/>
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
