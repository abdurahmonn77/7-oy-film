import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageRoutes } from '../hooks/routes'
import DashboardLayout from '../features/layout'

const FilmRoutes = () => {
  return (
      <DashboardLayout>
        <Routes>
            {PageRoutes.map(item => <Route key={item.id} path={item.path} element={item.element} />)}
        </Routes>
      </DashboardLayout>
 )
}

export default FilmRoutes