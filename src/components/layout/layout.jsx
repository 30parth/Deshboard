import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const layout = () => {
  return (
    <>
      <Header/> 
      <div className="container-fluid">
        <Sidebar/>
      </div>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <Outlet/>
      </main>
    </>
  )
}

export default layout
