import './App.css';
import React from 'react'
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


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>, 
      children:[
        {
          path: "/",
          element:<Dashboard/>,
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