import {React , useContext} from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import SignIn from '../pages/SignIn/Signin'
import { loginContext } from '../../context/context';

const layout = () => {
  const {Login } = useContext(loginContext);
  // console.log(props.login)

  if (Login === true) {
    return (
      <>
        <Header/> 
        <div className="container-fluid">
          <Sidebar/>
        </div>
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <Outlet />
        </main>
      </>
    )
  }
  else{
    // {console.log("Login false")}
    return (<SignIn />)
  }
}

export default layout
