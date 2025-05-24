import React from 'react';
import cheep from './assets/cheep.png';
import Card from './components/Card';
import './App.css';
import shinyGif from './assets/shiny.gif';


function App() {
  return (
    <div className="app">
      <Card
        image={cheep}
        texts={["wiwiwiwiwiwiwiwiwiwiwiwi", "wiwiwiwiwiwiwiwiwiwiwiwi", "wiwiwiwiwiwiwiwiwiwiwiwi"]}
        borderStyle=""
        backgroundImage={shinyGif}
      />
    </div>
  );
}

export default App;
