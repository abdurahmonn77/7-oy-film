import React from 'react'
import { getRequest } from '../service/getRequest'
import { KEY } from '../hooks/getEnv'

const NowPlaying = () => {
  const nowPlayingData = getRequest(`/now_playing?language=en-US&page=1&key=${KEY}`)
  console.log(nowPlayingData);

  return (
    <>
      {nowPlayingData?.results?.map(item => (
        <p key={item.id}>{item.title}</p>
      ))}
    </>
  )
}

export default NowPlaying