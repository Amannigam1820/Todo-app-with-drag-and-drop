import React from 'react'
import {Link} from "react-router-dom"
import "./register.scss"

const Register = () => {
  return (
    <div>
      <h1 className='heading'>Signup</h1>
      <div className='form-container'>
          <form className='login-form'>
            <input type="text" placeholder='First Name'/>
            <input type="text" placeholder='Last Name'/>
            <input type="text" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <input type="password" placeholder='Confirm Password'/>
            <button className='btn-signup'>SignUp</button>
            <b>Already have an account? <Link className='btn-log' to="/login">Login</Link></b>
            <button className='ggl-btn'>Signup by <b>Google</b></button>
          </form>
          


      </div>
    </div>
  )
}

export default Register