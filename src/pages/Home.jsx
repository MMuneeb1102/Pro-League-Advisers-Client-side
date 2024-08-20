import React, { useEffect } from 'react'
import '../styles/Home.css'
import '../styles/Signin.css'
import Cookies from 'universal-cookie'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../redux/slices/auth/authThunk'
const Home = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authToken = cookies.get('auth-token');
  const userData = useSelector((state)=> state.user);

  useEffect(()=>{
    if(authToken){
      dispatch(getUser());
      console.log(userData)
    }
  }, [])
  
  return (
    <div className='main-container main-home-container'>
      <div className="overlay"></div>
      <div className="account-div">
        <h2 style={{fontSize: '42px'}}>Unleash your inner <span style={{color: 'blue', paddingRight: '90px'}}>Gamer!</span></h2>
        <p style={{fontSize: '20px'}}>Level up your game, own the arena! Join the ultimate gaming showdown at Pro League Advisers – <b>Where Champions Rise!</b></p>
        {authToken ? <div className="acc-btn-div mt-3">
          <button className='button-52 sign-in-btn'>My Profile</button>
          <button className='button-52 sign-up-btn' onClick={()=>{navigate('/mytournaments')}}>My Tournaments</button>
        </div> 
        : 
        <div className="acc-btn-div mt-3">
          <button onClick={()=>{navigate('/signin')}} className='button-52 sign-in-btn'>Sign in</button>
          <button onClick={()=>{navigate('/signup')}} className='button-52 sign-up-btn'>Sign up</button>
        </div>}
      </div>
    </div>
  )
}

export default Home
