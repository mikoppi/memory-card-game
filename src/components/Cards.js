import React from 'react'
import Card from './Card'

//const cards = [{name:'card1'}, {name:'card2'}, {name:'card3'}]

const Cards = ({ pokemons, handleClick }) => {
  return (
    <div className='cards'>
        {pokemons.map(pokemon => 
        <Card key = {pokemon.id} name={pokemon.name} url={pokemon.picture} handleClick={handleClick}/>
        )}
    </div>
  )
}

export default Cards