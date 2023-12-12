// src/Header.js
import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <a href="/"><img src="logo.png" alt="Logo" style={{ width: '100px' }} /></a>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <h1>Welcome!</h1>
      <p>Welcome to our E-Commerce Website. You can find the Best Products here.</p>
    </header>
  );
};

export default Header;
