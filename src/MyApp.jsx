import React from 'react'

const generateArray = (n) => (Array.from({length: n}, (a, i) => i+1))

const generateRandomArray = (n) => (Array.from({length: n}, () => Math.floor(Math.random() * 25) + 1))

const Arr=[2, 56, 23, 88, 17, 4];


const MyApp = () => (
  <div>
    <h1>Minimal React zbartkus3150</h1>  
    <p>Bundle size: 59 bytes, Load time of the bundle: 65 ms, Last commit SHA1: 760da5c522369fda2052ce856de4b1201a5cf7d4</p>
  
    <ul>
      <p>Array of elements from 1 to n (i.e. n=15)</p>
      {generateArray(15).map(element => <li>{element}</li>)}

      <p>Array of n random elements from 1 to 25 (i.e. n=10) </p>
      {generateRandomArray(10).map(element => <li>{element}</li>)}

      <p>Array elements larger than 15</p>
      {Arr.map(element=>element>15?<li>{element}</li>:false)}
    </ul>
  </div> 
)

export default MyApp