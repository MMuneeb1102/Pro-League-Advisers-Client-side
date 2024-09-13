import React, { useEffect, useState } from 'react'
import '../styles/TournamentBracket.css'
import SingleBracket from '../components/SingleBracket'
import { useParams } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../redux/slices/auth/authThunk';

const TournamentBracket = () => {
  const cookies = new Cookies();
    const apiUrl = 'http://localhost:5000';
    const token = cookies.get('auth-token')
    const dispatch = useDispatch()
    const [startButtonStatus, setStartButtonStatus] = useState(false);
    const {id} = useParams();
    const [tournament, setTournament] = useState({});
    const [participants, setParticipants] = useState([]);
    const [matches, setMatches] = useState([]);
    const userId = useSelector((state)=> state.user.data?._id);

    const getUserData = async () =>{
      await dispatch(getUser());
    }
    
    useEffect(()=>{
        const getTournament = async () =>{
            try {
                console.log(id)
              const response = await fetch(`${apiUrl}/api/tournament/get-tournament-details/${id}`, {
                method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                    "auth-token": token,
                  },
              })
              if (!response.ok) {
                throw new Error(`Failed to fetch tournament. Status: ${response.status}`);
              }
              const data = await response.json();
              console.log(data);
              console.log(data.matches)
              setMatches(data.matches);
              setTournament(data);
            } catch (error) {
              console.error('Error fetching tournament:', error);
              throw error;
            }
          }
          getTournament();
          getUserData();
    }, [])

    const checkStatus = (index) =>{
      if(matches[index].player1.id === userId || matches[index].player2.id === userId){
        return true;
      }
      else{
        return false;
      }
    }

  return (
    <div className='bracket-main-container'>
      <div className="container">
        <h1 className='bracket-heading-h1'>Tournament</h1>
        <div className="tournament-bracket tournament-bracket--rounded">                                                     
            <div className="tournament-bracket__round tournament-bracket__round--quarterfinals">
            <h3 className="tournament-bracket__round-title">Round of 8</h3>
            <ul className="tournament-bracket__list">
                <li className="tournament-bracket__item">
                    <SingleBracket team1={matches[0]?.player1?.platformUsername} team2={matches[0]?.player2?.platformUsername} team1Abb={matches[0]?.player1?.platformUsername} team2Abb={matches[0]?.player2?.platformUsername} team1Score={matches[0]?.player1?.score}  team2Score={matches[0]?.player2?.score} btnStatus = {checkStatus(0)} />
                </li>

                <li className="tournament-bracket__item">
                    <SingleBracket  team1={matches[1]?.player1?.platformUsername} team2={matches[1]?.player2?.platformUsername} team1Abb={matches[1]?.player1?.platformUsername} team2Abb={matches[1]?.player2?.platformUsername} team1Score={matches[1]?.player1?.score}  team2Score={matches[1]?.player2?.score} btnStatus = {checkStatus(1)}/>
                </li>
                <li className="tournament-bracket__item">
                    <SingleBracket  team1={matches[2]?.player1?.platformUsername} team2={matches[2]?.player2?.platformUsername} team1Abb={matches[2]?.player1?.platformUsername} team2Abb={matches[2]?.player2?.platformUsername} team1Score={matches[2]?.player1?.score}  team2Score={matches[2]?.player2?.score} btnStatus = {checkStatus(2)} />
                </li>

                <li className="tournament-bracket__item">
                    <SingleBracket  team1={matches[3]?.player1?.platformUsername} team2={matches[3]?.player2?.platformUsername} team1Abb={matches[3]?.player1?.platformUsername} team2Abb={matches[3]?.player2?.platformUsername} team1Score={matches[3]?.player1?.score}  team2Score={matches[3]?.player2?.score} btnStatus = {checkStatus(3)} />
                </li>
            </ul>
            </div>
            <div className="tournament-bracket__round tournament-bracket__round--semifinals">
            <h3 className="tournament-bracket__round-title">Semifinals</h3>
            <ul className="tournament-bracket__list">
                <li className="tournament-bracket__item">
                    <SingleBracket  team1={matches[4]?.player1?.platformUsername} team2={matches[4]?.player2?.platformUsername} team1Abb={matches[4]?.player1?.platformUsername} team2Abb={matches[4]?.player2?.platformUsername} team1Score={matches[4]?.player1?.score}  team2Score={matches[4]?.player2?.score} btnStatus = {checkStatus(4)}/>
                </li>

                <li className="tournament-bracket__item">
                    <SingleBracket  team1={matches[5]?.player1?.platformUsername} team2={matches[5]?.player2?.platformUsername} team1Abb={matches[5]?.player1?.platformUsername} team2Abb={matches[5]?.player2?.platformUsername} team1Score={matches[5]?.player1?.score}  team2Score={matches[5]?.player2?.score} btnStatus = {checkStatus(5)}/>
                </li>
            </ul>
            </div>
            <div className="tournament-bracket__round tournament-bracket__round--bronze">
            <h3 className="tournament-bracket__round-title">Final</h3>
            <ul className="tournament-bracket__list">
                <li className="tournament-bracket__item">
                    <SingleBracket  team1={matches[6]?.player1?.platformUsername} team2={matches[6]?.player2?.platformUsername} team1Abb={matches[6]?.player1?.platformUsername} team2Abb={matches[6]?.player2?.platformUsername} team1Score={matches[6]?.player1?.score}  team2Score={matches[6]?.player2?.score} btnStatus = {checkStatus(6)}/>
                </li>
            </ul>
            </div>
        </div>
        </div>
    </div>
  )
}

export default TournamentBracket
