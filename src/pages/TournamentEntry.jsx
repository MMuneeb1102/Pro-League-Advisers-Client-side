import React, { useEffect, useState } from 'react'
import '../styles/TournamentEntry.css'
import EAFCImage from '../assets/EAFC.png';
import ControllerImg from '../assets/Controller.png';
import InputFieldLayput from '../components/InputFieldLayput';
import TournamentLayout from '../components/TournamentLayout';
import { useDispatch, useSelector } from 'react-redux';
import { setPlatformId, setPlatformName } from '../redux/slices/tournament/tournamentSlice';
import Modal from '../components/Modal';
import { fetchSpecificTournament, joinTournament } from '../redux/slices/tournament/tournamentThunk';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';

const TournamentEntry = () => {
    const navigate = useNavigate();
    const t_id = useParams();
    const dispatch = useDispatch();
    const platform = useSelector((state)=> state.tournament.platform)
    const isLoading = useSelector((state)=> state.tournament.isLoading)
    const submitLoading = useSelector((state)=> state.tournament.submitLoading)
    const [showModal, setShowModal] = useState(false);

    useEffect(()=>{
        dispatch(fetchSpecificTournament(t_id.id))
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            platform: platform.platformName,
            platformUsername: platform.platformId,
            id: t_id.id
        }
        const res = await dispatch(joinTournament(data));
        console.log(res)
        if(res.type === 'tournament/join/fulfilled'){
            console.log(joined)
            setShowModal(true);
        }
    }

    const handleBackToHome = () => {
      setShowModal(false);
      navigate('/')
    };
  return (
    <TournamentLayout Heading='EA FC 24' Img={EAFCImage}>
        <form onSubmit={handleSubmit} className='mb-5 mt-5'>
            <h1>Platform</h1>
            <div className='mb-3'>
            <select
                id="platformName"
                className="form-select form-control"
                onChange={(e)=>{dispatch(setPlatformName(e.target.value)); console.log(e.target.value)}}
                value={platform.platformName}
                required
              >
                <option defaultValue="Select Platform" value="">
                  Select Platform
                </option>
                <option value="PS5">
                  PS5
                </option>
                <option value="PS4">
                  PS4
                </option>
                <option value="PC">
                  PC
                </option>
                <option value="Xbox One">
                  PS4
                </option>
                <option value="Xbox Series X">
                    Xbox Series X
                </option>
              </select>
            </div>
            <div className="col-12">
                <label htmlFor="platform-id" className="login-input-label  form-label">Enter your platform ID</label>
                <InputFieldLayput onChange={(e)=>{dispatch(setPlatformId(e.target.value)); console.log(e.target.value)}} type='text' id='platform-id' value={platform.platformId} placeholder='Enter your platform Id' required={true}/>
            </div>
            <div className="entryFee-div">
                <h4>Entry Fee: </h4>
                <h4>0$</h4>
            </div>
            <div className='join-btn-container'>
                <button type='submit' className='primary-btn'>Pay & Join</button>
            </div>
            {submitLoading && <div className="Spinner-div mt-2">
                <Spinner/>
             </div>}
            <Modal showModal={showModal} backToHome={handleBackToHome} />
        </form>
        <div className="controller-img-div">
            <img src={ControllerImg} alt="" />
        </div>
    </TournamentLayout>

  )
}

export default TournamentEntry
