import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import SingIn from '../pages/SingIn'

const layout = (props) => {
  // console.log(props.login)
  if (props.login === true) {
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
  else{
    // {console.log("Login false")}
    return (<SingIn Login={props.login} chageLogin={props.chageLogin}/>)
  }
}

export default layout
