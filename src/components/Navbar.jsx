import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import logo from '../assets/logo.png';
import profileImg from '../assets/Profile.png'
import NavDropDown from './NavDropDown';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <img className="" src={logo} alt="" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" id='home-link'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Games</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Tournaments</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#" id='about-link'>About</Link>
        </li>
      </ul>
      <div className="">
        <div className='profileDiv'>
        <i className="fa-solid fa-user profile-icon" style={{fontSize: '1.4em'}}></i>
          <Link className='nav-signin-link'>Sign in</Link>
          {/* <NavDropDown/> */}
        </div>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar
