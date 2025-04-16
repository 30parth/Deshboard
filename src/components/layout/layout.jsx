import {React , useContext ,useState} from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import SignIn from '../pages/SignIn/Signin'
import { loginContext } from '../../context/context';

const layout = () => {
  const [search, setSearch] = useState('');
  const {Login } = useContext(loginContext);
  // console.log(props.login)

  if (Login === true) {
    return (
      <>
        <Header search={search} setSearch={setSearch}/> 
        <div className="container-fluid">
          <Sidebar/>
        </div>
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <Outlet context={search}/>
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
