import React from 'react'
import logo from '../downloads/pokemon.png'


const Header = ({ title }) => {
  return (
    <div className='header'>
        
        <img className='image' src={logo} alt='pokemon'></img>
    </div>
  )
}

export default Header