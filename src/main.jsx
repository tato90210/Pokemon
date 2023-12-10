import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/App'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import Data from './components/Data'
import Componente from './components/componente'
const router = createHashRouter([
    {
      path:'/',
      element:<Componente Datas={Data}/>
    },
    {
      path:'/app',
      element:<Componente Datas={App}/>  
    },
  
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
