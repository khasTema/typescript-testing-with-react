import React, { useState } from 'react';
import './App.css';

// const people: {
//   name: string;
//   url: string;
//   age: number;
//   notes: string;
// }[]

function App() {

  const [ people, setPeople ] = useState([
    {
      name: 'Lebron James',
      url: '',
      age: 36,
      notes: 'Alergit to staying on the same Team'
    },
    {
      name: 'Kobe Briant',
      url: '',
      age: 36,
    }
])

 people.map(per => per.age = '45') // provides an arror

  return (
    <div className="App">
      <h1>People invited to my Party</h1>
    </div>
  );
}

export default App;
