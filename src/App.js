// src/App.js
import React from 'react';
import Header from './Header';
import Footer from './Footer'; 
import Main from './Main' ;
import Features from './Features' ;
import './App.css'; // Import the App.css file

const App = () => {
  return (
    <div>
      <Header />
      <Main/>
      <a href="/learn-react">Learn React</a> {/* Yeni eklenen bağlantı */}
      <img src='/images/boot2.png' alt="" />
      <Features/>
      <Footer/>
    </div>
  );
};

export default App;
