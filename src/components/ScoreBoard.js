import React from 'react'

const ScoreBoard = ({ currentScore, bestScore}) => {
  return (
    <div className='score'>
    
        <h2>Test your memory. Try to click each Pokémon only once!</h2>
        <h2>Each level adds 8 new Pokémon to find. Get your score to 24 to win!</h2>

        <h3>Current score: {currentScore}</h3>
        <h3>Best score: {bestScore}</h3>
    </div>
  )
}

export default ScoreBoard