import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movie=useSelector(store=>store.movies)
  return (
    <div className='bg-black'>
      <div className='-mt-48 pl-12 relative z-20'>
      <MovieList title={"Now Playing"} movies={movie.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movie.popularMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movie.upcomingMovies}/>
      <MovieList title={"Top Rated"} movies={movie.topRatedMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer