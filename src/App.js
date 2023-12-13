import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Features from './Features';
import ShoeList from './ShoeList'; // Proje yapınıza bağlı olarak yolunuzu ayarlayın
import './App.css'; // Import the App.css file

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Features />
      <ShoeList /> {/* Eklenen kısım */}
      <Footer />
    </div>
  );
};

export default App;
