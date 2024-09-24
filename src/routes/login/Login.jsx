import React from 'react'
import "./login.scss"
import {Link} from "react-router-dom"

const Login = () => {
  return (
    <div>
      <h1 className='heading'>Login</h1>
      <div className='form-container'>
          <form className='login-form'>
            <input type="text" placeholder='email'/>
            <input type="password" placeholder='Password'/>
            <button className='btn-login'>Login</button>
            <b>dont have an account? <Link className='btn-reg' to="/register">SignIn</Link></b>
            <button className='ggl-btn'>Login by <b>Google</b></button>
          </form>
          


      </div>
    </div>
  )
}

export default Login