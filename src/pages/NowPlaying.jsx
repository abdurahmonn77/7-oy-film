import React from 'react'
import MoviePage from '../components/MoviePage'
import { getRequest } from '../service/getRequest'
import { KEY } from '../hooks/getEnv'

const NowPlaying = () => {
  return (
    <>
    <div className='bg-[#0a1f44bb] h-100vh pt-[25px]'>
      <MoviePage URL={'now_playing'}/>
    </div>
    </>
  )
}

export default NowPlaying