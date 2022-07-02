import React from 'react'

const Result = ( {currentScore, pokemonAmount, level} ) => {


  return (
    <div className='result'>
        <h2>Level: {level}</h2>
        {currentScore===50 ? <h2>You won!</h2> : <h2>{pokemonAmount} Pokemons</h2>}
    </div>
  )
}

export default Result