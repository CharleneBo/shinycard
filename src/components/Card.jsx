// src/components/Card.jsx
import React, { useState } from 'react';
import './Card.css'; // Create this next

export default function Card({ image, texts, borderStyle }) {
  const [offset, setOffset] = useState({ x: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - card.left) / card.width - 0.5) * 20;
    setOffset({ x });
  };

  return (
    <div
      className={`card ${borderStyle}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setOffset({ x: 0 })}
    >
      <div
        className="card-image"
        style={{ transform: `translateX(${offset.x}px)` }}
      >
        <img src={image} alt="Card" />
      </div>
      <ul className="card-texts">
        {texts.map((text, index) => (
          <li key={index}>✨ {text}</li>
        ))}
      </ul>
    </div>
  );
}
