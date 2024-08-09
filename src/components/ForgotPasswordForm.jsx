import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPasswordForm = () => {
  return (
    <div className="signin-container">
        <div className="signin-box">
            <div className='login-heading-div mb-5'>
                <h2>Reset Password</h2>
            </div>
                <form className="row g-3">
                    <div className="col-12">
                        <label htmlFor="login-email" className="login-input-label  form-label">Email</label>
                        <div className="login-input-div">
                            <div className='login-input-span'></div>
                            <input type="email" className="login-input-field " id="login-email" placeholder='xyz@example.com'/>
                        </div>
                    </div>
                    
                    <div className="col-12 " style={{display: 'flex', justifyContent: 'end'}}>
                        <Link to={'/signin'}>
                            back to login
                        </Link>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary" style={{padding: '8px 30px'}} >reset</button>
                    </div>
            </form>
        </div>
      </div>
  )
}

export default ForgotPasswordForm
