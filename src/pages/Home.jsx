import React from 'react'
import '../styles/Home.css'
import '../styles/Signin.css'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='main-container main-home-container'>
      <div className="overlay"></div>
      <div className="account-div">
        <h2>Unleash your inner <span style={{color: 'blue', paddingRight: '90px'}}>Gamer!</span></h2>
        <p>Level up your game, own the arena! Join the ultimate gaming showdown at Pro League Advisers – <b>Where Champions Rise!</b></p>
        <div className="acc-btn-div mt-3">
          <button onClick={()=>{navigate('/signin')}} className='button-52 sign-in-btn'>Sign in</button>
          <button onClick={()=>{navigate('/signup')}} className='button-52 sign-up-btn'>Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default Home
