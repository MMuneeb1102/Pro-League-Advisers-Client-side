import React, { useEffect } from 'react'
import TournamentLayout from '../components/TournamentLayout'
import TournamentsImg from '../assets/Tournaments.png';
import '../styles/Tournaments.css'
import TournamentCard from '../components/TournamentCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMyTournament, fetchTournaments } from '../redux/slices/tournament/tournamentThunk';
import Cookies from 'universal-cookie';

const TournamentLists = () => {
  const cookies = new Cookies()
  const dispatch = useDispatch();
  const tournaments = useSelector((state)=>state.tournament.allTournaments);
  const myTournament = useSelector((state)=>state.tournament.myTournament);
  const isAuthenticated = cookies.get('auth-token');
  
  useEffect(()=>{
    const fetchingTournaments = async () =>{
      await dispatch(fetchTournaments());
      if(cookies.get('auth-token')){
        const response = await dispatch(fetchMyTournament());
      
      }
    }
    fetchingTournaments()
  }, [])

  return (
    <TournamentLayout Heading="Tournaments" Img={TournamentsImg}>
      <div className='container'>
        <div className="row tr-row">
        {tournaments.map((data, index)=>(
          <div className="tournament-item mb-5" key={index}>
            <TournamentCard data={data} t_id={myTournament?._id}/>
          </div>
        ))}
        </div>
      </div>

    </TournamentLayout>
  )
}

export default TournamentLists
