import React, { useState } from 'react';
import './App.css';
import List from './components/List';

interface IState {
  people: {
    map(arg0: (p: any) => any): unknown;
    name: string,
    age: number,
    url: string,
    note?: string | number
  }[]
   
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([])

  


  return (
    <div className="App">
      <h1>People invited to my Party</h1>
      <List />
    </div>
  );
}

export default App;
