import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Componantes/Root/Root';
import Home from './Componantes/Home/Home';
import Appliedjobs from './Componantes/Appliedjobs/Appliedjobs';
import ErrorPage from './Componantes/ErrorPage/ErrorPage';
import Jobdetails from './Componantes/Jobdetails/Jobdetails';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:'/applied',
      element:<Appliedjobs></Appliedjobs>,
      loader:() => fetch ('/jobs.json')
      },
      {
      path:'/job/:id',
      element:<Jobdetails></Jobdetails>,
      loader:()=> fetch('../jobs.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
