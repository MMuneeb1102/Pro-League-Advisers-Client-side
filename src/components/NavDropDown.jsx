import React from 'react'
import '../styles/NavDropDown.css'
import { Link } from 'react-router-dom'

const NavDropDown = () => {
  return (
      <div className="dropdown-container">
        <ul className='dr-ul'>
            <li className='dropdown-profile-li'>
                <span className='user-span'>
                    <Link className='dropdown-profile-link' to="#">User 69</Link>
                    <i className="fa-solid fa-angle-down"></i>
                </span>
            <ul className="dropdown">
                <li className='dr-items'><Link to="#">Web Development</Link></li>
                <li className='dr-items'><Link to="#">Web Design</Link></li>
                <li className='dr-items'><Link to="#">Illustration</Link></li>
                <li className='dr-items'><Link to="#">Iconography</Link></li>
            </ul>
            </li>
        </ul>
    </div>
  )
}

export default NavDropDown
