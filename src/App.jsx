import { useState } from 'react'

import './App.css'
import Watch from './components/Watch/Watch'

function App() {
  const watches = [
    { id: 1, name: "Apple Watch Series 8", price: 399.99 },
    { id: 2, name: "Samsung Galaxy Watch 6", price: 349.99 },
    { id: 3, name: "Fitbit Versa 4", price: 229.95 },
    { id: 4, name: "Garmin Venu 2", price: 399.99 },
    { id: 5, name: "Amazfit GTR 4", price: 199.99 }
];

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
