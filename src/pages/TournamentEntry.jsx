import React from 'react'
import '../styles/TournamentEntry.css'
import EAFCImage from '../assets/EAFC.png';
import ControllerImg from '../assets/Controller.png';
import InputFieldLayput from '../components/InputFieldLayput';
const TournamentEntry = () => {
  return (
    <div className='join-T-main-container'>
      <div className="img-container">
        <img src={EAFCImage} alt="" />
        <h1>EA FC 24</h1>
      </div>
      <div className="form-container">
        <form>
            <h1>Platform</h1>
            <div className="col-12">
                <label htmlFor="platform-id" className="login-input-label  form-label">Enter your platform ID</label>
                <InputFieldLayput type='text' id='platform-id'/>
                {/* <div className="login-input-div">
                    <div className='login-input-span'></div>
                    <input type="text" className="login-input-field " id="platform-id" placeholder=''/>
                </div> */}
            </div>
            <div className="entryFee-div">
                <h4>Entry Fee: </h4>
                <h4>0$</h4>
            </div>
            <div className='join-btn-container'>
                <button className=' primary-btn'>Pay & Join</button>
            </div>
        </form>
        <div className="controller-img-div">
            <img src={ControllerImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default TournamentEntry
