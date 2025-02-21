import React from 'react'
import Header from '../modules/Header'
import FilmRoutes from '../routes'

const DashboardLayout = ({children}) => {
  return (
    <>
        <Header/>
        <div className='overflow-auto'>
            {children}
        </div>
    </>
  )
}

export default DashboardLayout