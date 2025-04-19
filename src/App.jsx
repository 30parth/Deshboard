import './App.css';
import { React, useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Dashboard from './components/pages/Dashboard/Dashboard'
import Order from './components/pages/Order/Order'
import Products from './components/pages/Product/Products'
import Account from './components/pages/Account/Account'
import Reports from './components/pages/Report/Reports'
import Integrations from './components/pages/Integrations/Integrations'
import Layout from './components/layout/layout'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import MainCom from './components/pages/MainCom';
import { loginContext } from './context/context';
import ProductAPI from './components/pages/Product/ProductAPI';


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
          element: <ProductAPI/>,
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