import { useState } from 'react'

import './App.css'
import Watch from './components/Watch/Watch'

function App() {
  const watches = [
    {id: 1, name: "Apple watch", price: 25000},
    {id: 2, name: "Rolex watch", price: 20000},
    {id: 3, name: "Casio watch", price: 14000}
  ]

  return (
    <>
      
      <h2>Vite + React</h2>
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
      
    </>
  )
}

export default App
