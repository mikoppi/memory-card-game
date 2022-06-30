import React, { useEffect, useState } from 'react'
import Cards from './Cards'


const Main = () => {
    const [memes, setMemes] = useState([])

    useEffect(() => {
        const loadCards = async () => {
            setMemes(await getMemes(10))
        }
        loadCards()
    },[])

    const getMemes = async (amount) => {
        const memes = [];
        for (let i = 1; i <= amount; i++) {
            const url = 'https://api.imgflip.com/get_memes';
            const response = await fetch(url);
            const meme = await response.json();
            console.log(meme)
            const id = meme.data.memes[i].id;
            const name = meme.data.memes[i].name
            const picture = meme.data.memes[i].url
            memes.push({id, name, picture})
        }
        return memes 
    }
    
  
     



  return (
    <div>
        <Cards memes={memes}/>
    </div>
  )
}

export default Main