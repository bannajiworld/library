import React from 'react'
import './styles/App.scss'
import Navbar from './components/Navbar'
import Books from './components/Books'

export default function App() {
  return(
    <>
     <div>
        <Navbar />
        <Books />
     </div>
    </>
  )
}
