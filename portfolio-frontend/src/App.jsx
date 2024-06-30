import { useState } from 'react'

import './App.css'
import { About } from './components/About'
import { Project } from './components/Project'
import { Contact } from './components/Contact'

function App() {


  return (
    <>
    <div className='bg-cyan-200 text-red h-screen'>
    <div className='flex justify-evenly'>
        <About />
        <Project />
        <Contact/>
       
       
        
      </div>
    </div>
      
    </>
  )
}

export default App
