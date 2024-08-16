import React, { Children } from 'react'
import '../styles/TournamentEntry.css'
import EAFCImage from '../assets/EAFC.png';
import TournamentsImg from '../assets/Tournaments.png';
import ControllerImg from '../assets/Controller.png';
import InputFieldLayput from '../components/InputFieldLayput';

const TournamentLayout = ({ children, Heading, Img}) => {
  return (
    <div className='join-T-main-container'>
      <div className="img-container">
        <img src={Img} alt="" />
        <h1>{Heading}</h1>
      </div>
      <div className="form-container">
        { children }
      </div>
    </div>
  )
}

export default TournamentLayout
