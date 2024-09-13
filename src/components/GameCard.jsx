import React from 'react'
import "../styles/GameCard.css";

const GameCard = ({url, Heading, gameDetails}) => {
  return (
    <div className='flip'>
        <div
          className='front f-div'
          style={{ backgroundImage: `url(${url}` }}
        >
          <h3 className='text-shadow'>{Heading}</h3>
        </div>
        <div className='back'>
          <h4>{Heading}</h4>
          <p>
          {gameDetails}
          </p>
        </div>
      </div>
  )
}

export default GameCard
