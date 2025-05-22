import React from 'react';
import cheep from './assets/cheep.png';
import Card from './components/Card';
import './App.css';


function App() {
  return (
    <div className="app">
      <Card
        image={cheep}
        texts={["wiwiwiwiwiwiwiwiwiwiwiwi", "wiwiwiwiwiwiwiwiwiwiwiwi", "wiwiwiwiwiwiwiwiwiwiwiwi"]}
        borderStyle=""
      />
    </div>
  );
}

export default App;
