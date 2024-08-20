import React, { useEffect } from 'react'
import TournamentLayout from '../components/TournamentLayout'
import TournamentsImg from '../assets/Tournaments.png';
import '../styles/Tournaments.css'
import TournamentCard from '../components/TournamentCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMyTournament } from '../redux/slices/tournament/tournamentThunk';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

const MyTournaments = () => {
  const navigate = useNavigate();
    const cookies = new Cookies()
    const dispatch = useDispatch();
    const myTournament = useSelector((state)=>state.tournament.myTournament);

    useEffect(()=>{
        const fetchingTournaments = async () =>{
          if(cookies.get('auth-token')){
            const response = await dispatch(fetchMyTournament());
            if(response.type === 'tournament/fetch-mytournament/fulfilled'){
                console.log(myTournament)
            }
          }
        }
        fetchingTournaments()
      }, [])

  return (
    <TournamentLayout Heading="Tournaments" Img={TournamentsImg}>
      <div className='container list-container'>
        <div className="row tr-row">
          <div className="tournament-item mb-5">
            {myTournament === null && <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}> <h4>You haven't joined any tournament yet.</h4> <div style={{display: 'flex', justifyContent: 'center'}} className='mt-2'><button className='btn-primary' onClick={()=>{navigate('/tournaments')}}>Explore Tournaments</button></div></div> }

            {myTournament !== null && <TournamentCard data={myTournament} t_id={myTournament}/>}
          </div>
        </div>
      </div>
    </TournamentLayout>
  )
}

export default MyTournaments
