import React, { useEffect, useState } from 'react'
import Cards from './Cards'


const Main = () => {
    const [pokemons, setPokemon] = useState([])

    useEffect(() => {
        const loadCards = async () => {
            setPokemon(await getPokemon(10))
        }
        loadCards()
    },[])

    const getPokemon = async (amount) => {
        const pokemons = [];
        for (let i = 1; i <= amount; i++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
            const response = await fetch(url);
            const pokemon = await response.json();
            console.log(pokemon)
            const id = pokemon.id;
            const name = pokemon.name
            const picture = pokemon.sprites.front_default
            pokemons.push({id, name, picture})
        }
        return pokemons 
    }
    
  
     



  return (
    <div>
        <Cards pokemons={pokemons}/>
    </div>
  )
}

export default Main