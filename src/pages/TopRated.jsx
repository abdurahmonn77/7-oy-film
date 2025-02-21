import React from 'react'
import MoviePage from '../components/MoviePage'

const TopRated = () => {
  return (
    <div className='bg-[#0a1f44bb] h-100vh pt-[25px]'>
      <MoviePage URL={'top_rated'}/>
    </div>
  )
}

export default TopRated