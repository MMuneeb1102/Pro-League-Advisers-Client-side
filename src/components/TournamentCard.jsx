import React from 'react'
import '../styles/Tournaments.css'
import { Link } from 'react-router-dom'
const TournamentCard = ({data, t_id}) => {
  const renderActionButton = () => {
    if (!t_id) {
        // Case: Tournament ID is not found
        return data.participants.length === 8 ? (
            <h5>Not available</h5>
        ) : (
            <Link to={`/join-tournament/${data?._id}`}>
                <i className="fa-solid fa-arrow-right arrow-icon"></i>
            </Link>
        );
    }
    else if(t_id && t_id._id === data._id){
      // Case: Tournament ID is found
      return t_id.status === 'started' ? <button>Start</button> : <h5>Joined</h5>
    
      
      // if (t_id._id === data._id && t_id.status !== 'started') {
      //     return <h5>Joined</h5>;
      // }
    }

    return <p>You have already joined</p>;

    // Case: Tournament is not started, check if the user has joined

    // Default case: User has already joined
};

  return (
    <div className='card-container'>
        <div className='tournament-info-container'>
          <div className='tour-heading-div'>
            <h5>EA FC 24</h5>
            <div className='tour-date-div'>
              <div className='tour-date'>
                <i className="fa-solid fa-calendar-days"></i>
                <p>24th august</p>
              </div>
              <div className='tour-date'>
                <i className="fa-solid fa-clock"></i>
                <p>10pm</p>
              </div>
            </div>
          </div>
            <hr />
            <div className='more-details'>
              <div>
                <p><b>Platform:</b> {data?.platform}</p>
                <p><b>Tournament:</b> {data?.tournamentName}</p>
                <p><b>Players Required:</b> {data?.participants.length}/8</p>
              </div>
              <div>
              {renderActionButton()}
                {/* {t_id ?(t_id.status === 'started' ? <button>Start</button> : (t_id === data._id ? <h5>Joined</h5> : 
                <p>You have already joined </p>))
                :
                (data.participants.length === 8 ? <h5>Not available</h5> : <Link to={`/join-tournament/${data?._id}`}><i className="fa-solid fa-arrow-right arrow-icon"></i></Link>)}
                 */}
              </div>
            </div>
        </div>
      </div>
  )
}

export default TournamentCard
