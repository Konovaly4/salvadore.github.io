import React from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import Shares from './Shares/Shares';
import Pricing from './Pricing/Pricing'
import pricingData from '../data/pricingData';
import Team from './Team/Team';
import teamData from '../data/teamData';
import photoData from '../data/photoData';
import Feedback from './Feedback/Feedback';
import feedbackData from '../data/feedbackData';
import Contacts from './Contacts/Contacts';
import './App.css';

function App() {
  const [appearance, setAppearance] = React.useState(false);

  const buttonAppear = (e) => {
    e.preventDefault();
    setAppearance(true);
  }

  const buttonDisappear = (e) => {
     if (!e.target.className.includes('navbar')) setAppearance(false);
  }

  return (
  <main className="app" onClick={appearance ? buttonDisappear : undefined}>
    <Header onButtonAppear={buttonAppear} />
    <Navbar visibility={appearance} />
    <Main />
    <Shares />
    <Pricing data={pricingData} />
    <Team data={teamData} photo={photoData} />
    <Feedback data={feedbackData} />
    <Contacts />
    <Navbar theme="dark" />
  </main>
  );
}

export default App;
