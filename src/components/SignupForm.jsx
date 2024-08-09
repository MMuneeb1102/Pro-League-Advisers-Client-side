import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignupForm = () => {
    const [passwordCheckbox, setPasswordCheckbox] = useState(false);
    const showPassword = () =>{
        if(!passwordCheckbox){
            setPasswordCheckbox(true);
        }
        else if(passwordCheckbox){
            setPasswordCheckbox(false);
        }
        console.log(passwordCheckbox)
    }
  return (
    <div className='signin-container'>
      <div className='signin-box'>
        <div className='login-heading-div mb-5'>
          <h2>Sign up</h2>
        </div>
        <form className='row g-3'>
          <div className='col-12'>
            <label
              htmlFor='login-email'
              className='login-input-label  form-label'
            >
              Email
            </label>
            <div className='login-input-div'>
              <div className='login-input-span'></div>
              <input
                type='email'
                className='login-input-field '
                id='login-email'
                placeholder='xyz@example.com'
              />
            </div>
          </div>
          <div className='col-12'>
            <label
              htmlFor='login-password'
              className='login-input-label form-label'
            >
              Password
            </label>
            <div className='login-input-div'>
              <div className='login-input-span'></div>
              <input
                type={passwordCheckbox ? 'text' : 'password'}
                className='login-input-field'
                id='login-password'
              />
            </div>
          </div>
          <div className='col-12'>
            <label
              htmlFor='login-confirm-password'
              className='login-input-label form-label'
            >
              Confirm Password
            </label>
            <div className='login-input-div'>
              <div className='login-input-span'></div>
              <input
                type={passwordCheckbox ? 'text' : 'password'}
                className='login-input-field'
                id='login-confirm-password'
              />
            </div>
          </div>
          <div
            className='col-12'
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                value={passwordCheckbox}
                id='showPass'
                onClick={showPassword}
              />
              <label className='form-check-label' htmlFor='showPass'>
                Show Password
              </label>
            </div>
            <Link to={"/signin"}>Already have an account?</Link>
          </div>
          <div className='col-12'>
            <button
              type='submit'
              className='btn btn-primary'
              style={{ padding: "8px 30px" }}
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
