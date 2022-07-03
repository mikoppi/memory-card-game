import React from 'react'
import Card from './Card'

//const cards = [{name:'card1'}, {name:'card2'}, {name:'card3'}]

const Cards = ({ pokemons, handleClick, currentScore }) => {
  return (
    <div className='cards'>
        {currentScore!==24 ? pokemons.map(pokemon => 
        <Card key = {pokemon.id} name={pokemon.name} url={pokemon.picture} handleClick={handleClick}/>
        ) : null}
    </div>
  )
}

export default Cards