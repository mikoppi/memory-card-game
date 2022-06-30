import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header title='Memory card game'/>
      <Main/>
      <Footer/>  
    </div>
  )
}

export default App