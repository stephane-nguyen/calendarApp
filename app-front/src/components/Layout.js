import React from 'react'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    //Outlet = all children of the component 
    <main className='App'>
        <Outlet />
    </main>
  )
}
