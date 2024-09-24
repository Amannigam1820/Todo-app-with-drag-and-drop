
import './App.css'
import Navbar from './component/Navbar/Navbar'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from './routes/Layout/Layout'
import HomePage from './routes/HomePage/HomePage'
import Login from './routes/login/Login'
import Register from './routes/register/Register'

function App() {
  
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<HomePage/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      }
    ]
  }
])
  return (
    
      <RouterProvider router= {router}/>
    
  )
}

export default App
