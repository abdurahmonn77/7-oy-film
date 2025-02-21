import React from 'react'
import { IMG_URL, KEY } from '../hooks/getEnv'
import { getRequest } from '../service/getRequest'
import MovieCard from './Card'

const MoviePage = ({URL}) => {
    const api_temp = getRequest('/now_playing?language=en-US&page=1&key=${KEY}')
    const data = getRequest(`/${URL}?language=en-US&page=1&key=${KEY}`)
    console.log(api_temp);
  return (
    <div className='flex flex-wrap gap-4 px-5 mx-auto space-y-5'>
        {data?.results?.map((item, index) => (
           <MovieCard key={index + 1} image={`${IMG_URL}/${item.poster_path}`} title={item.title} description={item.overview}/>
        ))}
    </div>
  )
}


export default MoviePage