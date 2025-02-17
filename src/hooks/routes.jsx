import React from 'react'
import { NowPlaying, Popular, Upcoming, TopRated } from '../pages'
import { PATH } from './path'


export const PageRoutes = [
    {
        id:1,
        path:PATH.nowPlaying,
        element:<NowPlaying/>
    },
    {
        id:2,
        path:PATH.upcoming,
        element:<Upcoming/>
    },
    {
        id:3,
        path:PATH.topRated,
        element:<TopRated/>
    },
    {
        id:4,
        path:PATH.popular ,
        element:<Popular/>
    },
]