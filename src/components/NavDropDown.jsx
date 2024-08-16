import React, { useEffect } from 'react'
import '../styles/NavDropDown.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import { resetData } from '../redux/slices/user/userSlice';
import { setMyTournament } from '../redux/slices/tournament/tournamentSlice';

const NavDropDown = () => {
    const cookies = new Cookies();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userData = useSelector((state)=> state.user.data);
    const authToken = cookies.get('auth-token')

    const handleLogout = (e) =>{
        e.preventDefault();
        dispatch(resetData());
        dispatch(setMyTournament());
        document.body.style.overflow = '';
        cookies.remove('auth-token');
        navigate('/')
    }

    if(!authToken || authToken === null){
        return <Link to='/signin' className='nav-signin-link'>Sign in</Link>
    }

  return (
      <div className="dropdown-container">
        <ul className='dr-ul'>
            <li className='dropdown-profile-li'>
                <span className='user-span'>
                    <Link className='dropdown-profile-link' to="#">{userData?.fullName}</Link>
                    <i className="fa-solid fa-angle-down"></i>
                </span>
            <ul className="dropdown">
                <li className='dr-items'><Link to="#">My Profile</Link></li>
                <li className='dr-items'><Link to="#">Manage Team</Link></li>
                <li className='dr-items'><Link onClick={handleLogout}>Logout</Link></li>
            </ul>
            </li>
        </ul>
    </div>
  )
}

export default NavDropDown
