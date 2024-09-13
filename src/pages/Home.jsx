import React, { useEffect, useState } from 'react'
import '../styles/Home.css'
import '../styles/Signin.css'
import Cookies from 'universal-cookie'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../redux/slices/auth/authThunk'
import tekkenSliderImg from '../assets/Rectangle 14.png'
import fortniteSliderImg from '../assets/FortniteCarousel.png'
import ThemedBlueButton from '../components/ThemedBlueButton'
import { io } from 'socket.io-client';
import CarouselItem from '../components/CarouselItem'

const Home = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authToken = cookies.get('auth-token');
  const userData = useSelector((state)=> state.user);
  const [socketState, setSocketState] = useState(null);
  const [notification, setNotification] = useState('');

  useEffect(()=>{
    if(authToken){
      dispatch(getUser());
      console.log(userData.data)
    }
  }, [])

  useEffect(()=>{
    const socket = io('http://localhost:5000');
    setSocketState(socket);

    socket.on('tournamentStarted', (data)=>{
      console.log('runnin scoket')
      console.log(data.message); // Logging the notification in the console
      setNotification(data.message); 
    })

    return () => {
      socket.disconnect();
    };

  }, [])
  
  return (
    <>
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
    {/* <div className=''>
    <div className="container-lg">
	<div className="row">
		<div className="col-md-12">
			<div id="myCarousel" className="carousel slide" data-ride="carousel">
				
				<div className="carousel-inner">
					<CarouselItem Img={tekkenSliderImg} customClassName='carousel-item active' Heading='EA FC 24' Genre='Sports'/>
					<CarouselItem Img={fortniteSliderImg} customClassName='carousel-item' Heading='Fortnite' Genre='Battle Royal'/>
				</div>
				<a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
					<i className="fa fa-angle-left"></i>
				</a>
				<a className="carousel-control-next" href="#myCarousel" data-slide="next">
					<i className="fa fa-angle-right"></i>
				</a>
			</div>
		</div>
	</div>
</div>
    </div> */}
    </>
  )
}

export default Home
