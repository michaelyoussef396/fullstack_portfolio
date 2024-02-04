import React from 'react'
import { About, Footer, Header, Skills,Work } from './container'
import './App.scss'
import NavBar from './components/NavBar/NavBar';

const App = () => {
  return (
    <div className='app'>
      <NavBar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  )
}

export default App
