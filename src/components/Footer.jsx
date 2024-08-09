import React from 'react'
import '../styles/Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer>
    <div className='footer-main-container'>
      <div className='footerSection'>
        <h2 className='footerHeadingDiv'>Navigation</h2>
        <div className="hr-container">
            <hr className='gap-hr'/>
        </div>
        <div className="footer-item-container">
            <ul>
                <li className='footer-item-li'><Link className='footer-item'>Home</Link></li>
                <li className='footer-item-li'><Link className='footer-item'>About us</Link></li>
                <li className='footer-item-li'><Link className='footer-item'>Tournaments</Link></li>
                <li className='footer-item-li'><Link className='footer-item'>FAQ</Link></li>
            </ul>
        </div>
      </div>
      <div className='footerSection'>
        <h2 className='footerHeadingDiv'>Support</h2>
        <div className="hr-container">
            <hr className='gap-hr'/>
        </div>
        <div className="footer-item-container">
            <ul>
                <li className='footer-item-li'><Link className='footer-item'>Contact us</Link></li>
                <li className='footer-item-li'><Link className='footer-item'>Help Center</Link></li>
                <li className='footer-item-li'><Link className='footer-item'>Feedback</Link></li>
                <li className='footer-item-li'><Link className='footer-item'>Report an issue</Link></li>
            </ul>
        </div>
      </div>
      <div className='footerSection'>
        <h2 className='footerHeadingDiv'>Legal</h2>
        <div className="hr-container">
            <hr className='gap-hr'/>
        </div>
        <div className="footer-item-container">
            <ul>
                <li className='footer-item-li'><Link className='footer-item'>Home</Link></li>
                <li className='footer-item-li'><Link className='footer-item'>About us</Link></li>
                <li className='footer-item-li'><Link className='footer-item'>Tournaments</Link></li>
                <li className='footer-item-li'><Link className='footer-item'>FAQ</Link></li>
            </ul>
        </div>
      </div>
    </div>
    <div className='copyright-div'>
        <p>&copy; Pro League Advisors, {year} </p>
    </div>
    </footer>
  )
}

export default Footer
