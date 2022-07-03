import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css'

const App = () => {
  return (
    <div>
      <Header title='Pokémon memory game'/>
      <Main/>
      <Footer/>  
    </div>
  )
}

export default App