import React from 'react'

const generateArray = (n) => (Array.from({length: n}, (a, i) => i+1))

const generateRandomArray = (n) => (Array.from({length: n}, (a, i) => i+1))


const MyApp = () => (
  <div>
    <h1>Minimal React zbartkus3150</h1>  
    <p>Bundle size: 59 bytes, Load time of the bundle: 65 ms, Last commit SHA1: 760da5c522369fda2052ce856de4b1201a5cf7d4</p>
  
    <ul>
      <p>Array of elements form 1 to n (i.e. n=15)</p>
      {generateArray(15).map(element => <li>{element}</li>)}
    </ul>
  </div> 
)

export default MyApp