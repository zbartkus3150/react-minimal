import React from 'react'

const generateArray = (n) => (Array.from({length: n}, (a, i) => i+1))

const generateRandomArray = (n) => (Array.from({length: n}, () => Math.floor(Math.random() * 25) + 1))

const Arr=[2, 56, 23, 88, 17, 4];

const Arr2=[2, 5, 8, 10];

const generateSqrRootArray = () => (Array.from(Arr2, element => Math.floor(Math.sqrt(element))))

const data=[
  {
    "teacherName": "Jan Nowak",
    "teacherAge": 36,
    "active": true,
    "students": [
      {
        "name": "Maciej Janosz",
        "age": 12
      },
      {
        "name": "Wojciech Kowalski",
        "age": 15
      },
      {
        "name": "Wioletta PoznaĹska",
        "age": 1000000
      }
    ]
  },
  {
    "teacherName": "Mariusz Flasinski",
    "teacherAge": 56,
    "active": true,
    "students": [
      {
        "name": "Jan Kot",
        "age": 12
      },
      {
        "name": "Jan Ziobro",
        "age": 15
      },
      {
        "name": "Adam Malysz",
        "age": 41
      }
    ]
  },
  {
    "teacherName": "Wojciech Kuzak",
    "teacherAge": 44,
    "active": false,
    "students": [
      {
        "name": "Janina Wronska",
        "age": 22
      },
      {
        "name": "John Dover",
        "age": 7
      },
      {
        "name": "Emil Petterson",
        "age": 46
      }
    ]
  }
]

function allStudents(){
  document.getElementById('data_id').innerHTML = "List of all students: "
  data.forEach(element=>element.students.forEach(element1=>document.getElementById('data_id').innerHTML += "<li>" + element1.name + "</li>"))
}

function sortStudents(){
  var temp=[];
  document.getElementById('data_id').innerHTML = "List of all students sorted alphabetically: "
  data.forEach(element=>element.students.forEach(element1=>temp.push(element1.name)))
  temp.sort();
  temp.forEach(element=>document.getElementById('data_id').innerHTML += "<li>" + element + "</li>")
}

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

      <p>Square root of array elements</p>
      {generateSqrRootArray().map(element => <li>{element}</li>)}
    </ul>

    <button onClick={allStudents}>All students</button>
    <button onClick={sortStudents}>Sort students</button>

    <ul id="data_id"/>
  </div> 
)

export default MyApp