import React, { useState } from 'react';
import './App.css';
import List from './components/List';
import { MyTypedArrayOfObjects } from './types/types';


function App() {

  const [people, setPeople] = useState<MyTypedArrayOfObjects["people"]>([
    {
      name: "LeBron James",
      age: 35,
      url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      note: "Allegeric to staying on the same team",
    }
  ])

  


  return (
    <div className="App">
      <h1>People invited to my Party</h1>
      <List people={people}/>
    </div>
  );
}

export default App;
