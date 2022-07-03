import React from 'react'

const Result = ( {currentScore, pokemonAmount, level} ) => {


  return (
    <div className='result'>
        
        {currentScore===50 ? <h2>You won!</h2> : <h2> Level: {level} ({pokemonAmount} Pokémon)</h2>}
    </div>
  )
}

export default Result