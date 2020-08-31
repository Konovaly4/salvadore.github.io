import React from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import Shares from './Shares/Shares';
import './App.css';

function App() {
  return (
  <div className="app">
    <Header />
    <Navbar />
    <Main />
    <Shares />
  </div>  
  );
}

export default App;
