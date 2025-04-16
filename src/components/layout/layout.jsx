import {React , useContext ,useState} from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import SignIn from '../pages/SignIn/Signin'
import { loginContext } from '../../context/context';
import { useSelector } from 'react-redux'
const layout = () => {
  const [search, setSearch] = useState('');
  // const {Login } = useContext(loginContext);
  // console.log(props.login)
  const isLogin = useSelector(state => state.auth.isLogin)
  console.log(isLogin)
  if (isLogin === true) {
    return (
      <>
        {/* <Header search={search} setSearch={setSearch}/>  */}
        <Header /> 
        <div className="container-fluid">
          <Sidebar/>
        </div>
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          {/* <Outlet context={search}/> */}
          <Outlet/>
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
