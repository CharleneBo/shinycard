import React from 'react';
import Card from './components/Card';
import './App.css';
import { cardData } from './data/cardData';
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="card-container">
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            texts={card.texts}
            borderStyle={card.borderStyle}
            backgroundImage={card.backgroundImage}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
