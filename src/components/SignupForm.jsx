import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { updateConfirmPassword, updateEmail, updatePassword, updateUsername, updateFullname } from "../redux/slices/auth/signupSlice";
import showPassword from "../js/ShowPassword";
import Spinner from "./Spinner";
import { signup } from "../redux/slices/auth/authThunk";
import Cookies from "universal-cookie";

const SignupForm = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const dispatch = useDispatch();
    const { email, fullname, username, password, confirmPassword, passwordCheckbox, isLoading } = useSelector((state)=>state.signup);

    const mystate = useSelector((state)=>state.signup);

    const handleOnChangeEmail = (e) =>{
      dispatch(updateEmail(e.target.value));
    }

    const handleOnChangeFullname = (e) =>{
      dispatch(updateFullname(e.target.value));
    }

    const handleOnChangeUsername = (e) =>{
      dispatch(updateUsername(e.target.value));
    }

    const handleOnChangePassword = (e) =>{
      dispatch(updatePassword(e.target.value));
    }

    const handleOnChangeConfirmPassword = (e) =>{
      dispatch(updateConfirmPassword(e.target.value));
    }
    
    const signInSubmit = async (e) =>{
      e.preventDefault();
      const data = {
        fullName: fullname, 
        userName: username, 
        email: email, 
        password: password,
        confirmPassword: confirmPassword
      }
      
      const newresponse = await dispatch(signup(data))
      console.log(newresponse)
      if(newRes.type === 'auth/create-user/fulfilled'){
        cookies.set('auth-token', newresponse.payload.authtoken, {
          expires: new Date(Date.now() + 2592000000)
      });
        console.log(newresponse.payload.authtoken);
        navigate('/');
      }
    }

  return (
    <div className='signin-container'>
      <div className='signin-box'>
        <div className='login-heading-div mb-5'>
          <h2>Sign up</h2>
        </div>
        <form className='row g-3' onSubmit={signInSubmit} >
          <div className='col-12'>
            <label
              htmlFor='login-fullname'
              className='login-input-label  form-label'
            >
              Full Name
            </label>
            <div className='login-input-div'>
              <div className='login-input-span'></div>
              <input
                type='text'
                value={fullname}
                onChange={handleOnChangeFullname}
                className='login-input-field '
                id='login-fullname'
                autoComplete="off"
                placeholder="Enter your full name"
                required
              />
            </div>
          </div>
          <div className='col-12'>
            <label
              htmlFor='login-username'
              className='login-input-label  form-label'
            >
              Username
            </label>
            <div className='login-input-div'>
              <div className='login-input-span'></div>
              <input
                type='text'
                value={username}
                onChange={handleOnChangeUsername}
                className='login-input-field '
                id='login-username'
                autoComplete="off"
                placeholder="@username"
                required
              />
            </div>
          </div>
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
                onChange={handleOnChangeEmail}
                value={email}
                className='login-input-field '
                id='login-email'
                placeholder='xyz@example.com'
                autoComplete="off"
                required
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
                placeholder="Enter your password"
                required
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
                value={confirmPassword}
                onChange={handleOnChangeConfirmPassword}
                placeholder="Enter password again"
                required
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
          {isLoading && <div className="Spinner-div">
          <Spinner/>
          </div>}
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
