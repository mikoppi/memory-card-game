import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import ScoreBoard from './ScoreBoard'
import Result from './Result'


const Main = () => {
    const [pokemons, setPokemon] = useState([])
    const [clickedPokemons, setClickedPokemons] = useState([])
    const [score, setScore] = useState(0)
    const [scoreHistory, setScoreHistory] = useState([0])
    const [level, setLevel] = useState(1)
    const [pokemonAmount, setPokemonAmount] = useState(6)
    const [startIndex, setStartIndex] = useState(1)

    useEffect(() => {
        const loadCards = async () => {
            changeLevel()
            setPokemon(randomizePokemon(await getPokemon(pokemonAmount, startIndex)))
        }
        loadCards()
    },[clickedPokemons, pokemonAmount])

    const getPokemon = async (amount, index) => {
        const pokemons = [];
        for (let i = 1; i <= level*6; i++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
            const response = await fetch(url);
            const pokemon = await response.json();
            const id = pokemon.id;
            const name = pokemon.name.toUpperCase()
            const picture = pokemon.sprites.front_default
            pokemons.push({id, name, picture})
        }
        return pokemons 
    }
    
    const handleClick = (e) => {
        let name = e.target.parentNode.id.toUpperCase()
        if (!clickedPokemons.includes(name)) {
                setClickedPokemons((prevState) => [...prevState, name])
                setScore((prevState) => prevState+1) 
        } else {
            resetGame()
        }
        console.log(clickedPokemons)
    }

    const resetGame = () => {
        setScoreHistory((prevState) => [...prevState, score])
        setClickedPokemons([])
        setScore(0)
        setPokemonAmount(6)
        setLevel(1)
    }
     
    const getBestScore = () => {
        return Math.max(...scoreHistory)
    }

    const randomizePokemon = (array) => array.sort(() => Math.random() - 0.5);

    const changeLevel = () => {
        if (clickedPokemons.length===pokemonAmount && clickedPokemons.length!==24) {
            setPokemonAmount((prevState) => prevState+6)
            setLevel((prevState) => prevState+1)
            setStartIndex((prevState) => prevState+4)
        } 
    }


  return (
    <div className='main'>
        <ScoreBoard currentScore={score} bestScore={getBestScore()}/>
        <Result reset={resetGame} currentScore={score} pokemonAmount={pokemonAmount} level={level}/>
        <Cards 
        pokemons={pokemons}
        handleClick={handleClick}
        currentScore={score}/>
    </div>
  )
}

export default Main