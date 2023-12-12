// src/App.js
import React from 'react';
import Header from './Header';
import Footer from './Footer'; 
import './App.css'; // Import the App.css file

const App = () => {
  return (
    <div>
      <Header />
      <section className="content">
        <h2>Welcome to Our E-Commerce Website</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac feugiat purus...</p>
        {/* Rest of the content */}
      </section>
      <Footer>
        <p>© 2023 My Website. All rights reserved.</p>
      </Footer>
    </div>
  );
};

export default App;
