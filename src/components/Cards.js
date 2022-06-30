import React from 'react'
import Card from './Card'

//const cards = [{name:'card1'}, {name:'card2'}, {name:'card3'}]

const Cards = ({ pokemons }) => {
  return (
    <div>
        {pokemons.map(pokemon => 
        <Card key = {pokemon.id} name={pokemon.name} url={pokemon.picture}/>
        )}
    </div>
  )
}

export default Cards