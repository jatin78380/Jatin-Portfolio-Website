import { useState } from 'react'
import {Hero} from './components/Hero'
import './App.css'
import {  Navbar } from './components/Navbar'
import { Project } from './components/Project'
import { Contact } from './components/Contact'

function App() {


  return (
    <>
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
    <div className="flixed top-0 -z-10 h-full w-full">
    <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
    </div>
       <div className='container mx-auto px-8'>
        <Navbar/>
        <Hero/>
       </div>
       
        
      </div>
    
      
    </>
  )
}

export default App
