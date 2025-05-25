import React from 'react';
import './Header.css';
import logo from '../../public/snek.png'; // Update the path if needed

export default function Header() {
  return (
    <header className="header">
      <div className="left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="center">
        <button className="nav-button">My Projects</button>
      </div>
      <div className="right">
        <button className="nav-button">Contact Me</button>
      </div>
    </header>
  );
}
