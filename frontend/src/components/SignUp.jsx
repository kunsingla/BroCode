import React from 'react'
import './LoginSignUp.css'
import {Link} from 'react-router-dom'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

function SignUp() {

  return (
    
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
        <div className="welcome">We'll be happy to have you with us!</div>
        <div className="inputs">
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder='Name' />
          </div>
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
        <div className="submit-container">
          <Link className="submit" role="button" to="/login">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp
