import React from 'react'
import Card from './Card'

//const cards = [{name:'card1'}, {name:'card2'}, {name:'card3'}]

const Cards = ({ memes }) => {
  return (
    <div>
        {memes.map(meme => 
        <Card key = {meme.id} name={meme.name} url={meme.picture}/>
        )}
    </div>
  )
}

export default Cards