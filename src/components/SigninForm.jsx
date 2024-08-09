import React from 'react'
import ThemedBlueButton from './ThemedBlueButton'
import { Link } from 'react-router-dom'

const SigninForm = () => {
  return (
    <div className="signin-container">
        <div className="signin-box">
            <div className='login-heading-div mb-5'>
                <h2>Sign in</h2>
            </div>
                <form className="row g-3">
                    <div className="col-12">
                        <label htmlFor="login-email" className="login-input-label  form-label">Email</label>
                        <div className="login-input-div">
                            <div className='login-input-span'></div>
                            <input type="email" className="login-input-field " id="login-email" placeholder='xyz@example.com'/>
                        </div>
                    </div>
                    <div className="col-12">
                        <label htmlFor="login-password" className="login-input-label form-label">Password</label>
                        <div className="login-input-div">
                            <div className='login-input-span'></div>
                            <input type="password" className="login-input-field" id="login-password"/>
                        </div>
                    </div>
                    <div className="col-12 forgot-pass-div">
                        <Link to={'/signup'}>
                            Create an account
                        </Link>
                        <Link to={'/forgot-password'}>
                            Forgot password?
                        </Link>
                    </div>
                    <div className="col-12">
                        <button type="submit" style={{padding: '8px 30px'}} className="btn btn-primary">Sign in</button>
                    </div>
            </form>
        </div>
      </div>
  )
}

export default SigninForm