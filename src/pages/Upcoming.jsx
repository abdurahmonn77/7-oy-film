import React from 'react'
import MoviePage from '../components/MoviePage'

const Upcoming = () => {
  return (
    <div className='bg-[#0a1f44bb] h-100vh pt-[25px]'>
      <MoviePage URL={'upcoming'}/>
    </div>
  )
}

export default Upcoming