import React from 'react'

const Result = ( {currentScore, pokemonAmount, level, reset} ) => {


  return (
    <div className='result'>
        
        {currentScore===24 ? 
        <h2 className='win'>
            <h1>You won!</h1>
            <button onClick={reset}>Play again</button>
        </h2> :
        <h2> Level: {level} ({pokemonAmount} Pokémon)</h2>}
    </div>
  )
}

export default Result