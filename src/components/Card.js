import React from 'react'

const Card = ({ name, url, handleClick }) => {
  return (
    <div className='card' id={name} onClick={handleClick}>
        <img src={url} alt='meme' width="120" height="120"></img>
        <h3>{name}</h3>
    </div>
  )
}

export default Card