import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Cookies from 'universal-cookie';
import { updateEmail, updatePassword } from "../redux/slices/auth/signinSlice";
import showPassword from "../js/ShowPassword";
import Spinner from "./Spinner";
import { signIn } from "../redux/slices/auth/authThunk";

const SigninForm = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email, password, isLoading } = useSelector((state) => state.signin);
  const passwordCheckbox = useSelector((state) => state.signup.passwordCheckbox);
  
  const handleOnChangeEmail = (e) => {
    dispatch(updateEmail(e.target.value));
  };

  const handleOnChangePassword = (e) => {
    dispatch(updatePassword(e.target.value));
  };

  const handleSignin = async (e) =>{
    e.preventDefault();
    const data = {
      email: email,
      password: password
    }
    const newRes = await dispatch(signIn(data))
    if(newRes.type === 'auth/login/fulfilled'){
      cookies.set('auth-token', newRes.payload.authtoken, {
          expires: new Date(Date.now() + 2592000000)
      });
      console.log(cookies.get('auth-token'))
      navigate('/')
    }
    else if(newRes.type === 'auth/login/rejected'){
      console.log(newRes.payload);
    }
  }


  return (
    <div className='signin-container'>
      <div className='signin-box'>
        <div className='login-heading-div mb-5'>
          <h2>Sign in</h2>
        </div>
        <form className='row g-3' onSubmit={handleSignin}>
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
                value={email}
                onChange={handleOnChangeEmail}
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
                value={password}
                onChange={handleOnChangePassword}
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
                onClick={()=>{showPassword(passwordCheckbox, dispatch)}}
              />
              <label className='form-check-label' htmlFor='showPass'>
                Show Password
              </label>
            </div>
            <div className=' forgot-pass-div'>
                <Link to={"/forgot-password"}>Forgot password?</Link>
                <Link to={"/signup"}>Create an account</Link>
          </div>
          </div>
          
          <div className='col-12'>
            <button
              type='submit'
              style={{ padding: "8px 30px" }}
              className='btn btn-primary'
            >
              Sign in
            </button>
          </div>
          {isLoading && <div className="Spinner-div">
          <Spinner/>
          </div>}
        </form>
      </div>
    </div>
  );
};

export default SigninForm;
