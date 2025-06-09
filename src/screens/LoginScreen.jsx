import React from 'react'
import '../styles/LoginScreen.css'; // Assuming you have a CSS file for styles
import logo from '../assets/logo.svg'

const LoginScreen = () => {
  return (
    <div className="login-bg">
        <div className="login-card">
            <div className="login-left">
                <img src={logo} alt="logo" className='login-logo' />
            </div>
            <div className="login-right">
                <h2 className="login-title">Welcome to IDMS Infotech</h2>
                <h2 className="login-subtitle">Integrated Digital Management System</h2>
                <form className="login-form">
                    <label htmlFor="username">
                        Username <span className='required'>*</span></label>
                    <input type="text" id="username" name="username" placeholder='Enter your ID' />
                    <label htmlFor="password">Password <span className='required'>*</span></label>
                    <input type="password" id="password" name="password" placeholder='Enter your password' />
                    <button type="submit" className="login-btn">Login</button>
                </form>
                <div className="login-footer">
                    <p>Forgot your password? <a href="/">Reset Password</a></p> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginScreen