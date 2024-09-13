import React, { useEffect, useState } from 'react'
import '../styles/TournamentEntry.css'
import ControllerImg from '../assets/Controller.png';
import InputFieldLayput from '../components/InputFieldLayput';
import Spinner from '../components/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../redux/slices/auth/authThunk';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cookies = new Cookies();
    const [userData, setUserData] = useState();
    const getNew = async () =>{
        
        try {
            const response = await fetch(`http://localhost:5000/api/auth/getuser`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': cookies.get('auth-token')
                }
            })
        
            if(!response.ok){
                const errorData = await response.json();
                console.log(errorData);
                return errorData
            }
        
            const responseData = await response.json();
            console.log(responseData); 
            setUserData(responseData);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getNew()
      }, [])

      const handleLogout = (e) =>{
        e.preventDefault();
        document.body.style.overflow = '';
        cookies.remove('auth-token');
        navigate('/')
    }
  return (
    <div className='form-container profileContainer' style={{padding: '100px 0px'}}>
      <form style={{color: 'white'}} className='mb-5 mt-5'>
            <h1>Profile</h1>
            <div className="col-12 mb-2">
                <label htmlFor="profile-name" className="login-input-label  form-label">Name</label>
                <InputFieldLayput value={userData?.fullName} type='text' id='profile-name' disabled/>
            </div>
            <div className="col-12 mb-2">
                <label htmlFor="profile-email" className="login-input-label  form-label" disabled>Email</label>
                <InputFieldLayput value={userData?.email} type='email' id='profile-email' disabled/>
            </div>
            <div className="col-12 mb-2">
                <label htmlFor="profile-username" className="login-input-label  form-label">Username</label>
                <InputFieldLayput value={userData?.userName} type='text' id='profile-username' disabled/>
            </div>
            <div className='join-btn-container'>
                <button type='button' onClick={handleLogout} className='primary-btn'>Logout</button>
            </div>
        </form>
        <div className="controller-img-div">
            <img src={ControllerImg} alt="" />
        </div>
    </div>
  )
}

export default Profile
