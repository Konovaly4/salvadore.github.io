import React from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import Shares from './Shares/Shares';
import Pricing from './Pricing/Pricing'
import pricingData from '../data/pricingData';
import Team from './Team/Team';
import teamData from '../data/teamData';
import './App.css';

function App() {
  return (
  <div className="app">
    <Header />
    <Navbar />
    <Main />
    <Shares />
    <Pricing data={pricingData} />
    <Team data={teamData} />
  </div>  
  );
}

export default App;
