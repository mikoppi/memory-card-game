import React from 'react'

const Card = ({ name, url }) => {
  return (
    <div>
        <h3>{name}</h3>
        <img src={url} alt='meme' width="150" height="150"></img>
    </div>
  )
}

export default Card