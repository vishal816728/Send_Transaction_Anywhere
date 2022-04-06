import { useState } from 'react'

import './App.css'
import Navbar from "./components/Navbar"
import Welcome from './components/Welcome'
import Loading from "./components/Loading"

import Footer from "./components/Footer"

function App() {


  return (
    <div className='min-h-screen text-center '>
       <div className='gradient-bg-welcome'>
        <Navbar/>
        <Welcome />
        </div>
        
        <Footer />
    </div>
  )
}

export default App
