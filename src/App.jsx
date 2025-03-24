import './App.css';
import {React , useState} from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Dashboard from './components/pages/Dashboard'
import Order from './components/pages/Order'
import Products from './components/pages/Products'
import Customer from './components/pages/Customer'
import Reports from './components/pages/Reports'
import Integrations from './components/pages/Integrations'
import Layout from './components/layout/layout'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import MainCom from './components/pages/MainCom';


function App() {
  const [Login, setLogin] = useState(false);

  const chageLogin =  ()  =>{
    if(Login === false)
    {
      setLogin(true);
      console.log(Login);
    }
    else {
      setLogin(false);
      console.log(Login);
    }
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout login={Login} chageLogin={chageLogin}/>, 
      children:[
        {
          path: "/",
          element:<Dashboard/>,
        },
        {
          path: "/Main",
          element:<MainCom/>,
        },
        {
          path: "/Dashboard",
          element: <Dashboard />, 
        },
        {
          path: "/Orders",
          element: <Order />, 
        },
        {
          path: "/Products",
          element: <Products />, 
        },
      
        {
          path: "/Customers",
          element: <Customer />, 
        },
        
        {
          path: "/Reports",
          element: <Reports />, 
        },
        
        {
          path: "/Integrations",
          element: <Integrations />, 
        }
      ]
    }
  ])
  return (
    <>
       
        <RouterProvider router={router} />
    </>
  );
}

export default App;