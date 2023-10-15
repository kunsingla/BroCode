import React from 'react'
import {Link} from 'react-router-dom'
import './Main.css'

function Main() {
  return (
      <div className="main">
        <div id='line'></div>
        <div id='desc_links'>
            <div className='desc'>
                <h2>Efficient Audit Transparency</h2>
                <h3>Streamline accountability with our Audit Management Website! </h3>
            </div>
            <div className='links'>
                <Link role="button" className="SignUp" to="signup">Sign Up</Link>
                <Link role="button" className="Login" to="login">Login</Link>
            </div>
        </div>
      </div>
  )
}

export default Main
