import './App.css';
import { React, useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Dashboard from './components/pages/Dashboard'
import Order from './components/pages/Order'
import Products from './components/pages/Products'
import Account from './components/pages/Account'
import Reports from './components/pages/Reports'
import Integrations from './components/pages/Integrations'
import Layout from './components/layout/layout'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import MainCom from './components/pages/MainCom';
import { loginContext } from './context/context';


function App() {
  const [Login, setLogin] = useState(true);
  const changeLogin = () => {
    setLogin(!Login);
    console.log(Login);
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/Main",
          element: <MainCom />,
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
          path: "/Account",
          element: <Account />,
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
      <loginContext.Provider value={{ Login, changeLogin }}>
        <RouterProvider router={router} />
      </loginContext.Provider>
    </>
  );
}

export default App;