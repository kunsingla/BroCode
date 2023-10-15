import React from 'react'
import './LoginSignUp.css'
import {Link} from 'react-router-dom'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

function Login() {

  return (
    
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
        <div className="welcome">Welcome Back!</div>
        <div className="inputs">
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder='Email ID' />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Password' />
          </div>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label" for="flexCheckDefault">
              Remember Me!
            </label>
        </div>
        <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>
        <div className="submit-container">
          <Link className="submit" role="button" to="/home">Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
