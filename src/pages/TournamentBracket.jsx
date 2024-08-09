import React, { useEffect, useState } from 'react'
import '../styles/TournamentBracket.css'
import SingleBracket from '../components/SingleBracket'
import { useParams } from 'react-router-dom';

const TournamentBracket = () => {
    const apiUrl = 'http://localhost:5000';
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhZmI2OTliZjU1YjBkMDc1ZjY4ZWM5In0sImlhdCI6MTcyMjc5MzQ1NH0.ov6ut2HpgPwNiBS1gn1p8oyo1aqGujcp0Ou9z8CyRzg';

    const {id} = useParams();
    const [tournament, setTournament] = useState({});
    const [participants, setParticipants] = useState([]);
    const [matches, setMatches] = useState([]);

    useEffect(()=>{
        const getTournament = async () =>{
            try {
                console.log(id)
              const response = await fetch(`${apiUrl}/api/admin/tournament/get-tournament-details/${id}`, {
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
    }, [])

  return (
    <div className='bracket-main-container'>
      <div className="container">
        <h1 className='bracket-heading-h1'>Tournament</h1>
        <div className="tournament-bracket tournament-bracket--rounded">                                                     
            <div className="tournament-bracket__round tournament-bracket__round--quarterfinals">
            <h3 className="tournament-bracket__round-title">Round of 8</h3>
            <ul className="tournament-bracket__list">
                <li className="tournament-bracket__item">
                    <SingleBracket  team1={matches[0]?.player1?.platformUsername} team2={matches[0]?.player2?.platformUsername} team1Abb={matches[0]?.player1?.platformUsername} team2Abb={matches[0]?.player2?.platformUsername} team1Score={matches[0]?.player1?.score}  team2Score={matches[0]?.player2?.score} />
                </li>

                <li className="tournament-bracket__item">
                    <SingleBracket  team1={matches[1]?.player1?.platformUsername} team2={matches[1]?.player2?.platformUsername} team1Abb={matches[1]?.player1?.platformUsername} team2Abb={matches[1]?.player2?.platformUsername} team1Score={matches[1]?.player1?.score}  team2Score={matches[1]?.player2?.score} />
                </li>
                <li className="tournament-bracket__item">
                    <SingleBracket  team1={matches[2]?.player1?.platformUsername} team2={matches[2]?.player2?.platformUsername} team1Abb={matches[2]?.player1?.platformUsername} team2Abb={matches[2]?.player2?.platformUsername} team1Score={matches[2]?.player1?.score}  team2Score={matches[2]?.player2?.score} />
                </li>

                <li className="tournament-bracket__item">
                    <SingleBracket  team1={matches[3]?.player1?.platformUsername} team2={matches[3]?.player2?.platformUsername} team1Abb={matches[3]?.player1?.platformUsername} team2Abb={matches[3]?.player2?.platformUsername} team1Score={matches[3]?.player1?.score}  team2Score={matches[3]?.player2?.score} />
                </li>
            </ul>
            </div>
            <div className="tournament-bracket__round tournament-bracket__round--semifinals">
            <h3 className="tournament-bracket__round-title">Semifinals</h3>
            <ul className="tournament-bracket__list">
                <li className="tournament-bracket__item">
                    <SingleBracket  team1={matches[4]?.player1?.platformUsername} team2={matches[4]?.player2?.platformUsername} team1Abb={matches[4]?.player1?.platformUsername} team2Abb={matches[4]?.player2?.platformUsername} team1Score={matches[4]?.player1?.score}  team2Score={matches[4]?.player2?.score} />
                </li>

                <li className="tournament-bracket__item">
                    <SingleBracket  team1={matches[5]?.player1?.platformUsername} team2={matches[5]?.player2?.platformUsername} team1Abb={matches[5]?.player1?.platformUsername} team2Abb={matches[5]?.player2?.platformUsername} team1Score={matches[5]?.player1?.score}  team2Score={matches[5]?.player2?.score} />
                </li>
            </ul>
            </div>
            <div className="tournament-bracket__round tournament-bracket__round--bronze">
            <h3 className="tournament-bracket__round-title">Final</h3>
            <ul className="tournament-bracket__list">
                <li className="tournament-bracket__item">
                    <SingleBracket  team1={matches[6]?.player1?.platformUsername} team2={matches[6]?.player2?.platformUsername} team1Abb={matches[6]?.player1?.platformUsername} team2Abb={matches[6]?.player2?.platformUsername} team1Score={matches[6]?.player1?.score}  team2Score={matches[6]?.player2?.score} />
                </li>
            </ul>
            </div>
        </div>
        </div>
    </div>
  )
}

export default TournamentBracket
