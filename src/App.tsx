import React, { useState } from 'react';
import './App.css';

// const people: {
//   name: string;
//   url: string;
//   age: number;
//   notes: string;
// }[]

function App() {

  const [ people, setPeople ] = useState([])


  return (
    <div className="App">
      <h1>People invited to my Party</h1>
    </div>
  );
}

export default App;
