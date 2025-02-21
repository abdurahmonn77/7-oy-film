import React from 'react'
import MoviePage from '../components/MoviePage'

const Popular = () => {
  return (
    <div className='bg-[#0a1f44bb] h-100vh pt-[25px]'>
      <MoviePage URL={'popular'}/>
    </div>
  )
}

export default Popular