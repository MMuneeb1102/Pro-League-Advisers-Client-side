import React, { useEffect } from 'react'
import '../styles/TournamentBracket.css'
const SingleBracket = ({team1, team2, team1Score, team2Score, team1Abb, team2Abb, btnStatus}) => {
    const getCurrentDate = () => {
        const date = new Date();
        const day = String(date.getDate()).padStart(2, '0'); // Add leading zero if necessary
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const year = date.getFullYear();
    
        return `${day}-${month}-${year}`;
      };

    useEffect(()=>{
        getCurrentDate();
    }, [])
    
  return (
    <div className="tournament-bracket__match" tabIndex="0">
        <table className="tournament-bracket__table">
        <caption className="tournament-bracket__caption">
            <time dateTime={getCurrentDate()}>{getCurrentDate()}</time>
        </caption>
        <thead className="sr-only">
            <tr>
            <th>Country</th>
            <th>Score</th>
            </tr>
        </thead>  
        <tbody className="tournament-bracket__content">
            <tr className="tournament-bracket__team tournament-bracket__team--winner">
            <td className="tournament-bracket__country">
                <abbr className="tournament-bracket__code" title={team1}>{team1Abb}</abbr>
                <span className="tournament-bracket__flag flag-icon flag-icon-cz" aria-label="Flag"></span>
            </td>
            <td className="tournament-bracket__score">
                <span className="tournament-bracket__number">{team1Score}</span>
            </td>
            </tr>
            <tr className="tournament-bracket__team">
            <td className="tournament-bracket__country">
                <abbr className="tournament-bracket__code" title={team2}>{team2Abb}</abbr>
                <span className="tournament-bracket__flag flag-icon flag-icon-us" aria-label="Flag"></span>
            </td>
            <td className="tournament-bracket__score">
                <span className="tournament-bracket__number">{team2Score}</span>
            </td>
            </tr>
        </tbody>
        {/* {btnStatus && <div className='mt-3' style={{display: 'flex', justifyContent: 'end'}}>
            <button style={{backgroundColor: '#5576d5cc', color: 'white'}}>Start</button>
        </div>} */}
        </table>
    </div>
  )
}

export default SingleBracket
