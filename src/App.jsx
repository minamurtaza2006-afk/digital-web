
import './App.css'
import React from 'react'
import Navbar from './assets/Components/Navbar/navbar'
import Home from './assets/Components/Home/home'
import Services from './assets/Components/Services/services'
import About from './assets/Components/About/about'
import Portfolio from './assets/Components/Portfolio/portfolio'
import Footer from './assets/Components/Footer/footer'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Navbar />
      
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
       <Route path='/about' element={<About />} />
       <Route path='/portfolio' element={<Portfolio />} />
      </Routes>


  <Footer />

    </>
  )
}

export default App
